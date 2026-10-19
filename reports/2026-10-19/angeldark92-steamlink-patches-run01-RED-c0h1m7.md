# AngelDark92/steamlink-patches — 2026-10-19

Commit: 01342c910e4ceed9fde9ca6f09d629ae4dbee490 | Status: RED | crit:0 high:1 med:7

<details>
<summary>[medium] patches/src/main/resources/steamlink/androidxr/libgxr_xr_bridge.so — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/resources/steamlink/androidxr/telemetry/libgxr_telemetry.so — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/resources/steamlink/androidxr/telemetry/libshadowhook.so — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/resources/steamlink/androidxr/telemetry/libshadowhook_nothing.so — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] patches/src/main/resources/steamlink/androidxr/libgxr_xr_bridge.so — [binary strings] sensitive source reaches network sink</summary>

```
Android
r27d
13750724
__cxa_finalize
__cxa_atexit
__register_atfork
memcpy
memset
fopen
fread
ferror
fclose
_Znwm
_ZdlPv
memmove
```

</details>

<details>
<summary>[medium] patches/src/main/resources/steamlink/androidxr/libgxr_xr_bridge.so — [binary strings] dangerous permission plus network sink in same file</summary>

```
Android
r27d
13750724
__cxa_finalize
__cxa_atexit
__register_atfork
memcpy
memset
fopen
fread
ferror
fclose
_Znwm
_ZdlPv
memmove
```

</details>

<details>
<summary>[medium] patches/src/main/resources/steamlink/androidxr/telemetry/libgxr_telemetry.so — [binary strings] new non-allowlisted URL or IP</summary>

```
Android
r27c
12479018
__cxa_finalize
__cxa_atexit
__register_atfork
dl_iterate_phdr
dladdr
dlopen
shadowhook_get_version
strcmp
shadowhook_init
shadowhook_get_disable
__android_log_print
dlsym
```

</details>

<details>
<summary>[medium] patches/src/main/resources/steamlink/androidxr/telemetry/libshadowhook.so — [binary strings] new non-allowlisted URL or IP</summary>

```
Android
r23c
8568313
__cxa_atexit
__cxa_finalize
__android_log_print
shadowhook_interceptor_caller
shadowhook_interceptor_glue
__stack_chk_fail
abort
gettid
memcmp
memcpy
sigsetjmp
syscall
```

</details>


__
