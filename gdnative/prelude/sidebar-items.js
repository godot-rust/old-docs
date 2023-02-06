window.SIDEBAR_ITEMS = {"attr":[["callbacks","Declares the library-level GDNative callbacks. See [`gdnative::init::GDNativeCallbacks`]."],["methods","Collects method signatures of all functions in a `NativeClass` that have the `#[method]` attribute and registers them with Godot."],["monomorphize","Wires up necessary internals for a concrete monomorphization of a generic `NativeClass`, represented as a type alias, so it can be registered."],["profiled","Makes a function profiled in Godot’s built-in profiler. This macro automatically creates a tag using the name of the current module and the function by default."]],"derive":[["FromVarargs","Enable struct types to be parsed as argument lists."],["FromVariant",""],["NativeClass","Makes it possible to use a type as a NativeScript. Automatically registers the type if the `inventory` feature is enabled on supported platforms."],["OwnedToVariant",""],["ToVariant",""]],"enum":[["FromVariantError","Error type returned by `FromVariant::from_variant`."],["GodotError","Error codes used in various Godot APIs."],["ManuallyManaged","Marker that indicates that a type is manually managed."],["RefCounted","Marker that indicates that a type is reference-counted."],["VariantDispatch","Rust enum associating each primitive variant type to its value."],["VariantOperator","Godot variant operator kind."],["VariantType",""]],"fn":[["autoload","Convenience method  to obtain a reference to an “auto-load” node, that is a child of the root node."],["load","Loads a resource from the filesystem located at `path`."]],"macro":[["godot_dbg","Prints and returns the value of a given expression for quick and dirty debugging, using the engine’s logging system (visible in the editor)."],["godot_error","Print an error using the engine’s logging system (visible in the editor)."],["godot_gdnative_init","This macro now does nothing. It is provided only for limited backwards compatibility."],["godot_gdnative_terminate","This macro now does nothing. It is provided only for limited backwards compatibility."],["godot_init","Legacy macro that declares all the API endpoints necessary to initialize a NativeScript library."],["godot_nativescript_init","Legacy macro that declares all the API endpoints necessary to initialize a NativeScript library."],["godot_print","Print a message using the engine’s logging system (visible in the editor)."],["godot_warn","Print a warning using the engine’s logging system (visible in the editor)."],["godot_wrap_method","Convenience macro to wrap an object’s method into a `Method` implementor that can be passed to the engine when registering a class."]],"mod":[["user_data","User-data attributes from [`export::user_data`][crate::export::user_data] module."]],"struct":[["Aabb","Axis-aligned bounding box."],["Basis","A 3x3 matrix, typically used as an orthogonal basis for [`Transform`][crate::core_types::Transform]."],["Button","`core class Button` inherits `BaseButton` (manually managed)."],["CanvasItem","`core class CanvasItem` inherits `Node` (manually managed)."],["CanvasLayer","`core class CanvasLayer` inherits `Node` (manually managed)."],["ClassBuilder","Allows registration of exported properties, methods and signals."],["Color","RGBA color with 32-bit floating point components."],["ColorRect","`core class ColorRect` inherits `Control` (manually managed)."],["Control","`core class Control` inherits `CanvasItem` (manually managed)."],["Dictionary","A reference-counted `Dictionary` of `Variant` key-value pairs."],["ExportInfo","Metadata about the exported property."],["GodotString","Godot’s reference-counted string type."],["Image","`core class Image` inherits `Resource` (reference-counted)."],["InitHandle","A handle that can register new classes to the engine during initialization."],["Input","`core singleton class Input` inherits `Object` (manually managed)."],["InputEvent","`core class InputEvent` inherits `Resource` (reference-counted)."],["InputEventKey","`core class InputEventKey` inherits `InputEventWithModifiers` (reference-counted)."],["Instance","A persistent reference to a GodotObject with a rust NativeClass attached."],["KinematicBody","`core class KinematicBody` inherits `PhysicsBody` (manually managed)."],["KinematicBody2D","`core class KinematicBody2D` inherits `PhysicsBody2D` (manually managed)."],["Label","`core class Label` inherits `Control` (manually managed)."],["MethodBuilder","Builder type used to register a method on a `NativeClass`."],["Node","`core class Node` inherits `Object` (manually managed)."],["Node2D","`core class Node2D` inherits `CanvasItem` (manually managed)."],["NodePath","A reference-counted relative or absolute path in a scene tree, for use with `Node.get_node()` and similar functions. It can reference a node, a resource within a node, or a property of a node or resource."],["Null","Represents an explicit null reference in method arguments. This works around type inference issues with `Option`. You may create `Null`s with `Null::null` or `GodotObject::null`."],["Object","The base class of all classes in the Godot hierarchy."],["PackedScene","`core class PackedScene` inherits `Resource` (reference-counted)."],["Plane","3D plane in Hessian form: `a*b + b*y + c*z + d = 0`"],["PoolArray","A reference-counted CoW typed vector using Godot’s pool allocator, generic over possible element types."],["Property","Placeholder type for exported properties with no backing field."],["PropertyUsage",""],["Quat","Quaternion, used to represent 3D rotations."],["Rect2","2D axis-aligned bounding box."],["Ref","A polymorphic smart pointer for Godot objects whose behavior changes depending on the memory management method of the underlying type and the thread access status."],["Reference","Base class of all reference-counted types. Inherits `Object`."],["ResourceLoader","`core singleton class ResourceLoader` inherits `Object` (manually managed)."],["Rid","A RID (“resource ID”) is an opaque handle that refers to a Godot `Resource`."],["SceneTree","`core class SceneTree` inherits `MainLoop` (manually managed)."],["Shader","`core class Shader` inherits `Resource` (reference-counted)."],["Shared","Marker that indicates that a value currently might be shared in the same or over multiple threads."],["SignalBuilder","Class to construct a signal. Make sure to call [`Self::done()`] in the end."],["SignalParam","Parameter in a signal declaration."],["Spatial","`core class Spatial` inherits `Node` (manually managed)."],["Sprite","`core class Sprite` inherits `Node2D` (manually managed)."],["StringName","Interned string."],["TInstance","A reference to a GodotObject with a rust NativeClass attached that is assumed safe during a certain lifetime."],["TRef","A temporary safe pointer to Godot objects that tracks thread access status. `TRef` can be coerced into bare references with `Deref`."],["Texture","`core class Texture` inherits `Resource` (reference-counted)."],["ThreadLocal","Marker that indicates that a value can currently only be shared in the same thread."],["Timer","`core class Timer` inherits `Node` (manually managed)."],["Transform","Affine 3D transform (3x4 matrix)."],["Transform2D","Affine 2D transform (2x3 matrix)."],["Tween","`core class Tween` inherits `Node` (manually managed)."],["Unique","Marker that indicates that a value currently only has a single unique reference."],["Variant","A `Variant` can represent all Godot values (core types or `Object` class instances)."],["VariantArray","A reference-counted `Variant` vector. Godot’s generic array data type. Negative indices can be used to count from the right."],["Vector2","2D vector class."],["Vector3","3D vector class."],["Viewport","`core class Viewport` inherits `Node` (manually managed)."]],"trait":[["AsArg","Trait for safe conversion from Godot object references into API method arguments. This is a sealed trait with no public interface."],["FromVariant","Types that can be converted from a `Variant`. Conversions are performed in Rust, and can be implemented for custom types."],["GDNativeCallbacks","Trait for declaring library-level GDNative callbacks. See module-level docs for examples."],["GodotObject","Trait for Godot API objects. This trait is sealed, and implemented for generated wrapper types."],["Instanciable","GodotObjects that have a zero argument constructor."],["Method","Safe low-level trait for stateful, variadic methods that can be called on a native script type."],["NativeClass","Trait used for describing and initializing a Godot script class."],["NativeClassMethods","Trait used to provide information of Godot-exposed methods of a script class."],["NewRef","A trait for incrementing the reference count to a Godot object."],["NodeResolveExt",""],["OwnedToVariant","Types that can only be safely converted to a `Variant` as owned values. Such types cannot implement `ToVariant` in general, but can still be passed to API methods as arguments, or used as return values. Notably, this includes `Unique` arrays, dictionaries, and references to Godot objects and instances."],["QueueFree","Manually managed Godot classes implementing `queue_free`. This trait has no public interface. See `Ref::queue_free`."],["SubClass","Marker trait for API types that are subclasses of another type. This trait is implemented by the bindings generator, and has no public interface. Users should not attempt to implement this trait."],["ToVariant","Types that can be converted to a `Variant`."],["ToVariantEq","Trait for types whose `ToVariant` implementations preserve equivalence."]]};