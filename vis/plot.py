from ctypes import *
import math

import numpy as np
import matplotlib.pyplot as plt


clib = CDLL("./build/libRobotSquiggles.so")


class VisDataPoint(Structure):
    _fields_ = [
        ("time", c_double),
        ("rx", c_double),
        ("ry", c_double),
        ("ryaw", c_double),
        ("rv", c_double),
        ("ra", c_double),
        ("rj", c_double),
    ]

    def __repr__(self):
        return f"VisDataPoint: {{time: {self.time}, rx: {self.rx}, ry: {self.ry}, ryaw: {self.ryaw}, rv: {self.rv}, ra: {self.ra}, rj: {self.rj}}}"


class VisData(Structure):
    _fields_ = [("size", c_uint), ("points", POINTER(VisDataPoint))]

    @classmethod
    def from_param(cls, obj):
        return obj


def plot_arrow(x, y, yaw, length=1.0, width=0.5, fc="r", ec="k"):  # pragma: no cover
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


def main():
    sx = 10.0  # start x position [m]
    sy = 10.0  # start y position [m]
    syaw = np.deg2rad(10.0)  # start yaw angle [rad]
    sv = 1.0  # start speed [m/s]
    sa = 0.1  # start accel [m/ss]
    gx = 20.0  # goal x position [m]
    gy = -10.0  # goal y position [m]
    gyaw = np.deg2rad(20.0)  # goal yaw angle [rad]
    gv = 1.0  # goal speed [m/s]
    ga = 0.1  # goal accel [m/ss]
    max_vel = 2.5
    max_accel = 1.0  # max accel [m/ss]
    max_jerk = 0.5  # max jerk [m/sss]
    dt = 0.1  # time tick [s]

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
    ]
    clib.compute_path.restype = VisData
    visdata = clib.compute_path(
        sx, sy, syaw, sv, sa, gx, gy, gyaw, gv, ga, max_accel, max_jerk, dt
    )

    time, rx, ry, ryaw, rv, ra, rj = [], [], [], [], [], [], []

    for i in range(visdata.size):
        time.append(visdata.points[i].time)
        rx.append(visdata.points[i].rx)
        ry.append(visdata.points[i].ry)
        ryaw.append(visdata.points[i].ryaw)
        rv.append(visdata.points[i].rv)
        ra.append(visdata.points[i].ra)
        rj.append(visdata.points[i].rj)
    run1_t = time[-1]

    for i, _ in enumerate(time):
        plt.cla()
        # for stopping simulation with the esc key.
        plt.gcf().canvas.mpl_connect(
            "key_release_event",
            lambda event: [exit(0) if event.key == "escape" else None],
        )
        plt.grid(True)
        plt.axis("equal")
        plot_arrow(sx, sy, syaw)
        plot_arrow(gx, gy, gyaw)
        plot_arrow(rx[i], ry[i], ryaw[i])
        plt.plot(rx, ry, "-b", label="trajectory")
        plt.title(
            "Time[s]:"
            + str(time[i])[0:4]
            + " v[m/s]:"
            + str(rv[i])[0:4]
            + " a[m/ss]:"
            + str(ra[i])[0:4]
            + " jerk[m/sss]:"
            + str(rj[i])[0:4],
        )
        plt.pause(0.001)

    # clib.parameterize.argtypes = [
    #     VisData,
    #     c_double,
    #     c_double,
    #     c_double,
    # ]
    # clib.parameterize.restype = VisData
    # visdata = clib.parameterize(visdata, max_vel, max_accel, max_jerk)

    for i in range(visdata.size):
        time[i] = visdata.points[i].time
        rx[i] = visdata.points[i].rx
        ry[i] = visdata.points[i].ry
        ryaw[i] = visdata.points[i].ryaw
        rv[i] = visdata.points[i].rv
        ra[i] = visdata.points[i].ra
        rj[i] = visdata.points[i].rj

    # TODO: subplots
    for i, _ in enumerate(time):
        plt.cla()
        # for stopping simulation with the esc key.
        plt.gcf().canvas.mpl_connect(
            "key_release_event",
            lambda event: [exit(0) if event.key == "escape" else None],
        )
        plt.grid(True)
        plt.axis("equal")
        plot_arrow(sx, sy, syaw)
        plot_arrow(gx, gy, gyaw)
        plot_arrow(rx[i], ry[i], ryaw[i])
        plt.plot(rx, ry, "-b", label="trajectory")
        plt.title(
            "Time[s]:"
            + str(time[i])[0:4]
            + " v[m/s]:"
            + str(rv[i])[0:4]
            + " a[m/ss]:"
            + str(ra[i])[0:4]
            + " jerk[m/sss]:"
            + str(rj[i])[0:4],
        )
        pause = 0.001
        if i > 0:
            pause = (time[i] - time[i - 1]) / 100
        plt.pause(pause)
    run2_t = time[-1]
    print(f"First: {run1_t} | Second: {run2_t}")
