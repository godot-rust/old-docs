initSidebarItems({"enum":[["DeadlockPolicy","Policies to deal with potential deadlocks"],["Infallible","Error type indicating that an operation can’t fail."],["LocalCellError","Error indicating that a borrow has failed."],["LockFailed","Error indicating that a lock wasn’t obtained."]],"struct":[["Aether","Special user-data wrapper intended for zero-sized types, that does not perform any allocation or synchronization at runtime. Does not implement `MapMut`."],["ArcData","User-data wrapper encapsulating a `Arc<T>`. Does not implement `MapMut`."],["DefaultLockPolicy","Default lock policy that may change in future versions."],["LocalCellData","User-data wrapper analogous to a `Arc<RefCell<T>>`, that is restricted to the thread where it was originally created."],["MutexData","User-data wrapper encapsulating a `Arc<Mutex<T>>`."],["Once","Special user-data wrapper intended for objects that can only be used once. Only implements `MapOwned`."],["RwLockData","User-data wrapper encapsulating a `Arc<RwLock<T>>`."],["ValueTaken",""]],"trait":[["LockOptions","Trait defining associated constants for locking wrapper options"],["Map","Trait for wrappers that can be mapped immutably."],["MapMut","Trait for wrappers that can be mapped mutably."],["MapOwned","Trait for wrappers that can be mapped once."],["UserData","Trait for customizable user-data wrappers."]],"type":[["DefaultUserData","The default user data wrapper used by derive macro, when no `user_data` attribute is present. This may change in the future."]]});