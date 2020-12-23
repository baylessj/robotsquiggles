// import React from "react";
// import Two from "twojs-ts";

// export const Path = (props) => {
//   var radius = 40,
//     editColor = "rgb(79, 128, 255)";
//   var two = new Two({
//     fullscreen: true,
//     autostart: true,
//   }).appendTo(document.body);

//   var polygon = new Two.Path(
//     [
//       new Two.Anchor(100, 72.975, 0, 0, 0, 0, "M"),
//       new Two.Anchor(0, 131.315, 64, 0, -64, 0, "C"),
//       new Two.Anchor(-100, 0, 0, 80, 0, -80, "C"),
//       new Two.Anchor(0, -131, -62, 0, 62, 0, "C"),
//       new Two.Anchor(85, -79, 0, 0, 0, 0, "C"),
//     ],
//     false,
//     true,
//     true
//   );
//   polygon.linewidth = radius;
//   polygon.cap = polygon.join = "round";
//   polygon.noFill().stroke = "#333";

//   var resize = function () {
//     var cx = two.width / 2;
//     var cy = two.height / 2;
//     var rect = polygon.getBoundingClientRect();
//     polygon.translation.set(cx - rect.width / 2, cy - rect.height / 2);
//   };
//   two.bind("resize", resize);
//   resize();

//   var path = two.makeGroup();
//   path.add(polygon);

//   polygon.vertices.forEach(function (anchor) {
//     // TODO: figure out an interface for adding/removing points
//     var p = two.makeCircle(0, 0, radius / 4);
//     var r = two.makePolygon(0, 0, radius / 4);
//     r.rotation =
//       Math.atan2(anchor.controls.right.y, anchor.controls.right.x) +
//       Math.PI / 2;

//     p.translation.copy(anchor);
//     r.translation.copy(anchor.controls.right).addSelf(anchor);
//     p.noStroke().fill = r.noStroke().fill = editColor;

//     var rl = new Two.Path([
//       new Two.Anchor().copy(p.translation),
//       new Two.Anchor().copy(r.translation),
//     ]);
//     rl.noFill().stroke = editColor;

//     var g = two.makeGroup(rl, p, r);
//     g.translation.addSelf(polygon.translation);
//     path.add(g);

//     p.translation.bind(Two.Events.change, function () {
//       anchor.copy(this);
//       r.translation.copy(anchor.controls.right).addSelf(this);
//       rl.vertices[0].copy(this);
//       rl.vertices[1].copy(r.translation);
//     });
//     r.translation.bind(Two.Events.change, function () {
//       anchor.controls.right.copy(this).subSelf(anchor);
//       rl.vertices[1].copy(this);

//       var x = -1 * (anchor.controls.right.x - anchor.x);
//       var y = -1 * (anchor.controls.right.y - anchor.y);
//       var opp = new Two.Vector(x, y);
//       anchor.controls.left.copy(opp).subSelf(anchor);

//       r.rotation =
//         Math.atan2(anchor.controls.right.y, anchor.controls.right.x) +
//         Math.PI / 2;
//     });

//     // Update the renderer in order to generate the actual elements.
//     two.update();

//     // Add Interactivity
//     addInteractivity(p);
//     addInteractivity(r);
//   });

//   function addInteractivity(shape) {
//     var offset = Two.Vector.add(
//       shape.parent.parent.translation,
//       shape.parent.translation
//     );

//     var drag = function (e) {
//       e.preventDefault();
//       var x = e.clientX - offset.x;
//       var y = e.clientY - offset.y;
//       shape.translation.set(x, y);
//     };
//     var touchDrag = function (e) {
//       e.preventDefault();
//       var touch = e.originalEvent.changedTouches[0];
//       drag({
//         preventDefault: function () {},
//         clientX: touch.pageX,
//         clientY: touch.pageY,
//       });
//       return false;
//     };
//     var dragEnd = function (e) {
//       e.preventDefault();
//       window.unbind("mousemove", drag).unbind("mouseup", dragEnd);
//     };
//     var touchEnd = function (e) {
//       e.preventDefault();
//       $(window).unbind("touchmove", touchDrag).unbind("touchend", touchEnd);
//       return false;
//     };

//     $(shape._renderer.elem)
//       .css({
//         cursor: "pointer",
//       })
//       .bind("mousedown", function (e) {
//         e.preventDefault();
//         window.bind("mousemove", drag).bind("mouseup", dragEnd);
//       })
//       .bind("touchstart", function (e) {
//         e.preventDefault();
//         window.bind("touchmove", touchDrag).bind("touchend", touchEnd);
//         return false;
//       });
//   }

//   return <></>;
// };
