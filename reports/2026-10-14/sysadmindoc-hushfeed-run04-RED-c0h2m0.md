# SysAdminDoc/hushfeed — 2026-10-14

Commit: 2a99958df0a19a07d9c618e39127b1562d1cde9e | Status: RED | crit:0 high:2 med:0

<details>
<summary>[high] tools/verification-probe/src/app/hushfeed/verification/Probe.java — sensitive source reaches network sink</summary>

```
                        // -e index N: the Nth match in tree order, for a label that repeats (a tab
                        // and the badges below it); every match's place is printed either way.
                        String indexExtra = intent.getStringExtra("index");
                        int index = indexExtra == null ? 1 : Integer.parseInt(indexExtra);
                        int matches = 0;
                        StringBuilder places = new StringBuilder();
                        while (!queue.isEmpty()) {
                                matches++;
                                int[] place = new int[2];
                                view.getLocationOnScreen(place);
                                places.append(" #").append(matches).append('=').append(place[0]).append(',').append(place[1]);
                                if (matches == index) found = view;
                            Log.i(TAG, "ok findtext none (" + matches + " matches" + places + ")");
                        Log.i(TAG, "ok findtext found at=" + at[0] + "," + at[1] + " size=" + found.getWidth() + "x" + found.getHeight() + clicked
                                + " (" + matches + " matches" + places + ")");
```

</details>

<details>
<summary>[high] tools/verification-probe/src/app/hushfeed/verification/Probe.java — reflection-hidden behavior with network sink</summary>

```
                        // -e index N: the Nth match in tree order, for a label that repeats (a tab
                        // and the badges below it); every match's place is printed either way.
                        String indexExtra = intent.getStringExtra("index");
                        int index = indexExtra == null ? 1 : Integer.parseInt(indexExtra);
                        int matches = 0;
                        StringBuilder places = new StringBuilder();
                        while (!queue.isEmpty()) {
                                matches++;
                                int[] place = new int[2];
                                view.getLocationOnScreen(place);
                                places.append(" #").append(matches).append('=').append(place[0]).append(',').append(place[1]);
                                if (matches == index) found = view;
                            Log.i(TAG, "ok findtext none (" + matches + " matches" + places + ")");
                        Log.i(TAG, "ok findtext found at=" + at[0] + "," + at[1] + " size=" + found.getWidth() + "x" + found.getHeight() + clicked
                                + " (" + matches + " matches" + places + ")");
```

</details>


__
