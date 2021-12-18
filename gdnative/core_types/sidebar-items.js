initSidebarItems({"enum":[["Axis",""],["CallError",""],["FromVariantError","Error type returned by `FromVariant::from_variant`."],["GodotCharError","Error indicating that a `GodotChar` cannot be converted to a `char`."],["GodotError","Error codes used in various Godot APIs."],["VariantDispatch","Rust enum associating each primitive variant type to its value."],["VariantEnumRepr",""],["VariantOperator","Godot variant operator kind."],["VariantStructRepr",""],["VariantType",""]],"struct":[["Aabb","Axis-aligned bounding box."],["Aligned","A pool array access that is (assumed to be) aligned."],["Basis","A 3x3 matrix, typically used as an orthogonal basis for [`Transform`][crate::core_types::Transform]."],["Color","RGBA color with 32 bits floating point components."],["Dictionary","A reference-counted `Dictionary` of `Variant` key-value pairs."],["GodotChar","Type representing a character in Godot’s native encoding. Can be converted to and from `char`. Depending on the platform, this might not always be able to represent a full code point."],["GodotString","Godot’s reference-counted string type."],["InvalidOp","Error indicating that an operator result is invalid."],["MaybeNot","Wrapper type around a `FromVariant` result that may not be a success"],["MaybeUnaligned","A pool array access that may be unaligned."],["NodePath","A reference-counted relative or absolute path in a scene tree, for use with `Node.get_node()` and similar functions. It can reference a node, a resource within a node, or a property of a node or resource."],["Owned","A pool array write access with an owned aligned copy. The data is written back when this is dropped."],["Plane","Plane in hessian form."],["PoolArray","A reference-counted CoW typed vector using Godot’s pool allocator, generic over possible element types."],["Quat","Quaternion, used to represent 3D rotations."],["ReadGuard","RAII read guard."],["Rect2",""],["Rid","The RID type is used to access the unique integer ID of a resource. They are opaque, so they do not grant access to the associated resource by themselves."],["StringName",""],["Transform","Affine 3D transform (3x4 matrix)."],["Transform2D","Affine 2D transform (2x3 matrix)."],["Variant","A `Variant` can represent all Godot values (core types or `Object` class instances)."],["VariantArray","A reference-counted `Variant` vector. Godot’s generic array data type. Negative indices can be used to count from the right."],["Vector2","2D vector class."],["Vector3","3D vector class."],["WriteGuard","RAII write guard."]],"trait":[["CoerceFromVariant","Types that can be coerced from a `Variant`. Coercions are provided by Godot, with results consistent with GDScript. This cannot be implemented for custom types."],["Element","Trait for element types that can be contained in `PoolArray`. This trait is sealed and has no public interface."],["FromVariant","Types that can be converted from a `Variant`. Conversions are performed in Rust, and can be implemented for custom types."],["Guard","Trait for array access guards"],["OwnedToVariant","Types that can only be safely converted to a `Variant` as owned values. Such types cannot implement `ToVariant` in general, but can still be passed to API methods as arguments, or used as return values. Notably, this includes `Unique` arrays, dictionaries, and references to Godot objects and instances."],["ToVariant","Types that can be converted to a `Variant`."],["ToVariantEq","Trait for types whose `ToVariant` implementations preserve equivalence."],["WritePtr","Marker trait for write access guards"]],"type":[["ByteArray","A reference-counted vector of `u8` that uses Godot’s pool allocator."],["ColorArray","A reference-counted vector of `Color` that uses Godot’s pool allocator."],["Float32Array","A reference-counted vector of `f32` that uses Godot’s pool allocator."],["GodotResult","Result type with [GodotError]"],["Int32Array","A reference-counted vector of `i32` that uses Godot’s pool allocator."],["Read","A RAII read access for Godot typed arrays."],["StringArray","A reference-counted vector of `GodotString` that uses Godot’s pool allocator."],["Vector2Array","A reference-counted vector of `Vector2` that uses Godot’s pool allocator."],["Vector3Array","A reference-counted vector of `Vector3` that uses Godot’s pool allocator."],["Write","A RAII write access for Godot typed arrays. This will only lock the CoW container once, as opposed to every time with methods like `push`."]]});