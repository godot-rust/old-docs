initSidebarItems({"fn":[["register_runtime","Adds required supporting NativeScript classes to `handle`. This must be called once and only once per initialization."],["set_boxed_executor","Sets the global executor for the current thread to a `Box<dyn LocalSpawn>`. This value is leaked."],["set_executor","Sets the global executor for the current thread to a `&'static dyn LocalSpawn`."],["terminate_runtime","Releases all observers still in use. This should be called in the `godot_gdnative_terminate` callback."]],"struct":[["Async","Adapter for async methods that implements `Method` and can be registered."],["Context","Context for creating `yield`-like futures in async methods."],["Spawner","A helper structure for working around naming future types. See [`Spawner::spawn`]."],["Yield","Future that can be `await`ed for a signal or a `resume` call from Godot. See `Context` for methods that return this future."]],"trait":[["AsyncMethod","Trait for async methods. When exported, such methods return `FunctionState`-like objects that can be manually resumed or yielded to completion."]]});