initSidebarItems({"fn":[["cartasian2polar","Converts a 2D point expressed in the `cartesian` coordinate system (X and Y axis) to the `polar` coordinate system (a distance from the origin and an angle `(in radians)`)."],["cartesian2polar","Converts a 2D point expressed in the polar coordinate system (a distance from the origin r and an angle th (radians)) to the cartesian coordinate system (X and Y axis)."],["db2linear","Converts from `decibels` to linear energy (audio)."],["ease","Returns an “eased” value of x based on an easing function defined with `curve`. This easing function is based on an `exponent`. The curve can be any floating-point number, with specific values leading to the following behaviors:"],["fposmod","Returns the floating-point modulus of `a/b` that wraps equally in `positive` and `negative`."],["inverse_lerp","Returns an interpolation or extrapolation factor considering the range specified in `range.start()` and `range.end()`, and the interpolated value specified in `weight`. The returned value will be between `0.0` and `1.0` if `weight` is between `range.start()` and `range.end()` (inclusive). If `weight` is located outside this range, then an extrapolation factor will be returned (return value lower than `0.0` or greater than `1.0`)."],["is_equal_approx","Returns `true` if `a` and `b` are approximately equal to each other. Here, approximately equal means that `a` and `sb` are within a small internal epsilon of each other, which scales with the magnitude of the numbers. Infinity values of the same sign are considered equal."],["is_zero_approx","Returns true if s is zero or almost zero. This method is faster than using is_equal_approx with one value as zero."],["lerp","Linearly interpolates between two values by the factor defined in weight. To perform interpolation, weight should be between 0.0 and 1.0 (inclusive). However, values outside this range are allowed and can be used to perform extrapolation."],["lerp_angle","Linearly interpolates between two angles (in radians) by a normalized value. Similar to lerp, but interpolates correctly when the angles wrap around `TAU`. To perform eased interpolation with `lerp_angle`, combine it with `ease` or `smoothstep` use std::f32::consts::{PI, TAU}; use gdnative::globalscope::lerp_angle;"],["linear2db","Converts from linear energy to decibels (audio). This can be used to implement volume sliders that behave as expected (since volume isn’t linear)."],["move_toward","Moves `range.start()` toward `range.end()` by the `delta` `value`. Use a negative `delta` value `range.end()` move away."],["nearest_po2","Returns the nearest equal or larger power of 2 for integer value. In other words, returns the smallest value a where `a = pow(2, n)` such that `value <= a` for some non-negative integer `n`."],["posmod","Returns the integer modulus of a/b that wraps equally in positive and negative."],["range_lerp","Maps a value from range `range.from` to `range_to`."],["smoothstep","Returns the result of smoothly interpolating the value of `s` between `0` and `1`, based on the where `s` lies with respect to the edges `from` and `to`. The return value is `0` if `s <= from`, and `1` if `s >= to`. If `s` lies between `from` and `to`, the returned value follows an S-shaped curve that maps `s` between `0` and `1`. This S-shaped curve is the cubic Hermite interpolator, given by `f(y) = 3*y^2 - 2*y^3` where `y = (x-from) / (to-from)`. Compared to ease with a curve value of `-1.6521`, smoothstep returns the smoothest possible curve with no sudden changes in the derivative. If you need to perform more advanced transitions, use Tween or AnimationPlayer."],["step_decimals","Returns the `position` of the first `non-zero` digit, after the decimal point. Note that the `maximum` return `value` is `10`, which is a design decision in the implementation."],["stepify","Snaps float value s to a given step. This can also be used to round a floating point number to an arbitrary number of decimals."],["wrapf","Wraps float value between min and max. Usable for creating loop-alike behavior or infinite surfaces."],["wrapi","Wraps integer value between min and max. Usable for creating loop-alike behavior or infinite surfaces."]]});