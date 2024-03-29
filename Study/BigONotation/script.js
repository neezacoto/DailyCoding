public class oops {
    public static void main(String[] args) {
        /**
         * Big O Notiation talks about two concepts, time complexity and space
         * complexity. these O notations are written as O(n)
         * where n represents either the time complexity of n items as they scale or
         * space complexity how memory usage scales
         * 
         * O(1) Best < O(logn) Good < O(n) fair < O(nlogn) Bad < O(n!), O(c^n), O(n^c)
         * Worst
         */

        string[] arr = {}; // When we refer to n, we will be referring to the array's length

        // this array contains three numbers, the array will represent n in time
        // complexity, as it grows to the length of the input
        // O(n)
        for (let i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        // ASSUMING arr2 stays at constant length and arr grows this would have a time
        // complexity of O(n):
        // where arr's growth is linear
        // the function for this is (arr.length * arr2.length)
        // but since arr, is only scaling, if we were to infinitely scale, arr2's length
        // becomes insignificant
        // so in other words it could be thought of as (arr.length * 1) thus,
        // n*1
        // O(n)

        for (let j = 0; j < arr2.length; j++) {
            for (let i = 0; i < arr.length; i++) {
                System.out.println(arr[i]);
            }
        }

        // lets say n = arr.length
        // the inner for loop that runs n times, iterates n times because of the outer
        // forloop
        // the function n * n, thus n^2
        // O(n)

        for (let j = 0; j < arr.length; j++) { // n
            for (let i = 0; i < arr.length; i++) { // runs n iterations n times, i.e n * n
                System.out.println(arr[i]);
            }
        }

        // this would have a time complexity of O(n): n representing the length of 'arr'
        // two forloops are next to eachother,
        // forloop j runs n times
        // forloop i runs n times
        // though they aren't nested, it could be thought of as
        // function: n + n
        // though we only care about the largest scaling, so
        // O(n)

        for (let j = 0; j < arr.length; j++) {
            System.out.println(arr[j]);
        }

        for (let i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        // i runs n times iterating n times from j, so n *n
        // the adjacent forloop so,
        // function: (n * n) + n = n^2 + n, and
        // we only care about the largest scaling
        // O(n^2)

        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < arr.length; i++) {
                System.out.println(arr[i]);
            }
        }

        for (let i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        // this has a space complexity of O(1): nothing is scaling
        for (let i = 0; i < 10; i++) {
            System.out.println(arr[i]);
        }

        // this problem divides n each iteration,
        // once we EVER approach a problem that divides a problem each iteration is
        // O(log n)
        while (n > 0) {
            n /= 2;
        }

        // Below we have
        // O(nlog n) as
        // the inner forloop is being multiplied by the outer forloop
        // the inner log n, the outer n, i.e.,
        // function n * log in
        // O(nlogn)

        // O(n)
        for (let i = 0; i < n; i++) { // O(n)

            while (x > 0) { // O(log n)
                x /= 2;
            }
        }
        // operations are just constant so
        // O(1)
        int s = 4 + 3;


        //SOOOOOOO trick question :)
        //ASSUME arr is an array of strings
        // what's the function and what's the big O???
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                System.out.println(arr[i]);
            }
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i].indexOf("u"));
        }

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                System.out.println(arr[i].contains("bruh"));
            }
        }

        //Drum roll
        //...
        //..
        //.
        //function: (n*n) + (n*n) + (n*n*n)
        //O(n^3)

        // forloop one, we already know
        // forloop two, indexOf is also a method in itself, the method is ...

        static int indexOf(char[] source, int sourceOffset, int sourceCount,
            char[] target, int targetOffset, int targetCount,
            int fromIndex) {
        if (fromIndex >= sourceCount) {
            return (targetCount == 0 ? sourceCount : -1);
        }
        if (fromIndex < 0) {
            fromIndex = 0;
        }
        if (targetCount == 0) {
            return fromIndex;
        }

        char first = target[targetOffset];
        int max = sourceOffset + (sourceCount - targetCount);

        for (int i = sourceOffset + fromIndex; i <= max; i++) {
            /* Look for first character. */
            if (source[i] != first) {
                while (++i <= max && source[i] != first);
            }

            /* Found first character, now look at the rest of v2 */
            if (i <= max) {
                int j = i + 1;
                int end = j + targetCount - 1;
                for (int k = targetOffset + 1; j < end && source[j] 
                        == target[k]; j++, k++); 

                if (j == end) {
                    /* Found whole string. */
                    return i - sourceOffset;
                }
            }
        }
        return -1;
    }
    // O(m*n) where n and m are the length of the search string and pattern respectively.
    // though we only really care about the n in this case, so 
    // O(n)
    // this method is called from a long list of other indexOf's that end up calling the final above
    public int indexOf(String str) {
        return indexOf(str, 0);
    }

    // and for contains, it's O(n) as well, so that's how we get our answer

    //So the moral of the story, don't blindly use methods, they all have a time complexity

    }

}
