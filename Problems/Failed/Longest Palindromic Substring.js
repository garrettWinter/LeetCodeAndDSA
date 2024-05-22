/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let results = '';
    for (let i = 0; i < s.length; i++) {
        let currentString = '';
        for (let c = i; c < s.length; c++) {
            currentString += s[c];
            if (currentString === currentString.split("").reverse().join("")) {
                if (currentString.length > results.length) {
                    results = currentString
                };
            };
        };
    };
    console.log(results);
    return results;
};

/////////// The next attempt needs to be more effecient.... hitting timesouts
////  https://leetcode.com/problems/longest-palindromic-substring/description/

/*
create a results varaiable

for loop on s length
    create current string
    for loop on string again, based on length minus i
        add current index to temp string
            check to see if temp string is pal
                Yes?
                    Check to see if current length is larger than results string
                        Yes - Update results with temp string
Return results

*/

let s = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy";
longestPalindrome(s);