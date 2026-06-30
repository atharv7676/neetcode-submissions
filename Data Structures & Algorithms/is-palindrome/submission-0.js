class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l < r){
            while(l<r && !this.alphanum(s[l])){
                l++;
            }
            while(r>l && !this.alphanum(s[r])){
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            }

            l++;
            r--;
        }
    return true;
    }

    alphanum(c){
        return (
            (c >= "A" && c <= "z")||
            (c >= "a" && c <= "z")||
            (c >= "0" && c <= "9")
        );
    }
}
