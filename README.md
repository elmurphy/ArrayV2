# ArrayV2

### Github https://github.com/elmurphy/ArrayV2
### NPM https://www.npmjs.com/package/arrayv2

New type JavaScript array.

Simple linq functions for javascript arrays!

-Where<br>
-OrderBy<br>
-OrderByDesc<br>
-Select<br>
-SelectMany<br>
-GroupBy<br>

Every functions has a Set version, the Set function will return the end of your data and set your array(for view engines vue, react, angular...)<br>
Use as "WhereSet", "OrderBySet",.... <br>

{
<br>
var arr = [<br>
{ Id: 1, expStr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", expBool: true },<br>
{ Id: 2, expStr: "Mauris eget neque eu nulla molestie bibendum", expBool: true },<br>
{ Id: 3, expStr: "Vivamus consequat egestas suscipit.", expBool: false },<br>
{ Id: 4, expStr: "Donec varius eget massa dignissim elementum", expBool: true },<br>
{ Id: 5, expStr: "In a ornare massa, non eleifend risus", expBool: false },<br>
];<br>
var arrV2 = arr.AsV2();<br>
arrV2.Where(x => x.Id > 3); //[ { Id: 4, expStr: "Donec varius eget massa dignissim elementum", expBool: true }, { Id: 5, expStr: "In a ornare massa, non eleifend risus", expBool: false } ]
}