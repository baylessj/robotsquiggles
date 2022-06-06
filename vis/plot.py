from ctypes import *
import math
import os
import sys

import matplotlib.pyplot as plt

if sys.platform == "linux" or sys.platform == "linux2":
    # linux
    clib = CDLL(os.path.join(os.getcwd(), "build/libsquiggles_compat.so"))
elif sys.platform == "darwin":
    clib = CDLL(os.path.join(os.getcwd(), "build/libsquiggles_compat.dylib"))
else:
    clib = CDLL(os.path.join(os.getcwd(), "build/libsquiggles_compat.dll"))

class VisDataPoint(Structure):
    _fields_ = [
        ("time", c_double),
        ("x", c_double),
        ("y", c_double),
        ("yaw", c_double),
        ("v", c_double),
        ("a", c_double),
        ("j", c_double),
        ("k", c_double),
        ("lv", c_double),
        ("rv", c_double),
    ]

    def __repr__(self):
        return f"VisDataPoint: {{time: {self.time}, x: {self.x}, y: {self.y}, yaw: {self.yaw}, v: {self.v}, a: {self.a}, j: {self.j}, k: {self.k}}}"


class VisData(Structure):
    _fields_ = [("size", c_uint), ("points", POINTER(VisDataPoint))]

    @classmethod
    def from_param(cls, obj):
        return obj


def plot_arrow(x, y, yaw, length=0.50, width=0.2, fc="r", ec="k"):  # pragma: no cover
    """
    Plot arrow
    """

    if not isinstance(x, float):
        for (ix, iy, iyaw) in zip(x, y, yaw):
            plot_arrow(ix, iy, iyaw)
    else:
        plt.arrow(
            x,
            y,
            length * math.cos(yaw),
            length * math.sin(yaw),
            fc=fc,
            ec=ec,
            head_width=width,
            head_length=width,
        )
        plt.plot(x, y)


def path(time, x, y, yaw, lx, ly, rx, ry, lv, rv, k):
    plt.subplot(2, 1, 1)
    plt.plot(time, lv)
    plt.subplot(2, 1, 2)
    for i, _ in enumerate(time):
        plt.cla()
        # for stopping simulation with the esc key.
        plt.gcf().canvas.mpl_connect(
            "key_release_event",
            lambda event: [sys.exit(0) if event.key == "escape" else None],
        )
        plt.grid(True)
        plt.axis("equal")

        plot_arrow(lx[i], ly[i], yaw[i], (lv[i] / 3.0))
        plot_arrow(rx[i], ry[i], yaw[i], (rv[i] / 3.0))
        plt.plot(x, y, "-b", label="trajectory")
        plt.plot(lx, ly, "--r", linewidth=1)
        plt.plot(rx, ry, "--r", linewidth=1)

        plt.pause(0.001)
    plt.show()


def kinematics(time, v, a):
    plt.subplot(2, 1, 1)
    plt.title("Velocity")
    plt.plot(time, v, "-b")
    plt.subplot(2, 1, 2)
    plt.title("Acceleration")
    plt.plot(time, a, "-r")
    plt.show()

def main():
    sx = 0.0  # start x position [m]
    sy = 0.0  # start y position [m]
    syaw = 0.0
    sv = 0.0  # start speed [m/s]
    sa = 0.0  # start accel [m/ss]

    gx = 0.5  # goal x position [m]
    gy = 0.5  # goal y position [m]
    gyaw = 0.0
    gv = 0.0  # goal speed [m/s]
    ga = 0.0  # goal accel [m/ss]
    max_vel = 1.5
    max_accel = 0.5  # max accel [m/ss]
    max_jerk = 6.0  # max jerk [m/sss]
    dt = 0.1  # time tick [s]
    track_width = 0.4

    clib.compute_path.argtypes = [
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
        c_double,
    ]
    clib.compute_path.restype = VisData
    visdata = clib.compute_path(
        sx,
        sy,
        syaw,
        sv,
        sa,
        gx,
        gy,
        gyaw,
        gv,
        ga,
        max_vel,
        max_accel,
        max_jerk,
        track_width,
        dt,
    )

    time, x, y, yaw, v, a, j, k, lx, ly, lv, rx, ry, rv = (
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    )

    for i in range(visdata.size):
        time.append(visdata.points[i].time)
        x.append(visdata.points[i].x)
        y.append(visdata.points[i].y)
        yaw.append(visdata.points[i].yaw)
        v.append(visdata.points[i].v)
        a.append(visdata.points[i].a)
        j.append(visdata.points[i].j)
        k.append(visdata.points[i].k)
        lx.append(
            visdata.points[i].x
            + (track_width / 2) * -1 * math.sin(visdata.points[i].yaw)
        )
        ly.append(
            visdata.points[i].y + (track_width / 2) * math.cos(visdata.points[i].yaw)
        )
        rx.append(
            visdata.points[i].x + (track_width / 2) * math.sin(visdata.points[i].yaw)
        )
        ry.append(
            visdata.points[i].y
            + (track_width / 2) * -1 * math.cos(visdata.points[i].yaw)
        )
        lv.append(visdata.points[i].lv)
        rv.append(visdata.points[i].rv)

    path(time, x, y, yaw, lx, ly, rx, ry, v, rv, k)
    # kinematics(time, v, a)

if __name__ == "__main__":
    main()
