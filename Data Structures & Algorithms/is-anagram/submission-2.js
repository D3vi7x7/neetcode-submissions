class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();
        for (const x in s){
            if (map.has(s[x]))
            {
                map.set(s[x], map.get(s[x]) + 1)
            }else{
                map.set(s[x], 1)
            }
        }

        for (const x in t){
            if (map.has(t[x]))
            {
                map.set(t[x], map.get(t[x]) - 1)
            }else{
                map.set(t[x], 1)
            }
        }

        console.log(map)

        const flag = 0;
        for (const [key,value] of map)
        {
            console.log(value)
            if (value !== 0)
            {
                return false
            }
        }

        return true
    }
}
