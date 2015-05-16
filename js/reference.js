var REFERENCE=
[
    [
        {code:"[abc]",explain:"方括号之间的任何字符"},
        {code:"[^abc]",explain:"任何不在方括号之间的字符"},
        {code:"[0-9]",explain:"任何从 0 至 9 的数字"}
    ],
    [
        {code:"[a-z]",explain:"任何从小写 a 到小写 z 的字符"},
        {code:"[A-z]",explain:"任何从大写 A 到小写 z 的字符"},
        {code:"( a | b | c )",explain:"任何指定的选项"}
    ],
    [
        {code:".",explain:"单个字符，除了换行和行结束符"},
        {code:"\\ w",explain:"单词字符"},
        {code:"\\ W",explain:"非单词字符"}
    ],
    [
        {code:"\\ d",explain:"数字"},
        {code:"\\ D",explain:"非数字字符"},
        {code:"\\ s",explain:"空白字符"}
    ],
    [
        {code:"\\ S",explain:"非空白字符"},
        {code:"\\ b",explain:"单词边界"},
        {code:"\\ B",explain:"非单词边界"}
    ],
    [
        {code:"\\ 0",explain:"NUL 字符"},
        {code:"\\ n",explain:"换行符"},
        {code:"\\ f",explain:"换页符"}
    ],
    [
        {code:"\\ r",explain:"回车符"},
        {code:"\\ t",explain:"制表符"},
        {code:"\\ v",explain:"垂直制表符"}
    ],
    [
        {code:"\\ xxx",explain:"以八进制数 xxx 规定的字符"},
        {code:"\\ xdd",explain:"以十六进制数 dd 规定的字符"},
        {code:"\\ uxxxx",explain:"以十六进制数 xxxx 规定的字符"}
    ],
    [
        {code:"n+",explain:"包含至少一个n的字符串"},
        {code:"n*",explain:"包含零个或多个n的字符串"},
        {code:"n?",explain:"包含零个或一个n的字符串"}
    ],
    [
        {code:"n{X}",explain:"包含X个n的序列的字符串"},
        {code:"n{X,Y}",explain:"包含X或Y个n的序列的字符串"},
        {code:"n{X,}",explain:"包含至少X个n的序列的字符串"}
    ],
    [
        {code:"n$",explain:"结尾为n的字符串"},
        {code:"^n",explain:"开头为n的字符串"},
        {code:"?=n",explain:"其后紧接指定字符串n的字符串"}
    ],
    [
        {code:"?!n",explain:"其后没有紧接指定字符串n的字符串"}
    ]
];

module.exports =  REFERENCE;
