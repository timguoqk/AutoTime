var entries = [
	[1, 2, 3, 4, 5],
	[7, 9, 11, 13, 15],
	[8, 10, 12, 14, 16]
];
var values = [
	["10:00 AM", "12:00 PM"],
	["12:00 PM", "12:30 PM"],
	["12:30 PM", "6:30 PM"]
];

for (var i = 1; i <= 5; i ++)
	$("#tsExpressAdd" + i).click().click();


for (var i = 0; i < entries.length; i ++) {
	for (var j = 0; j < entries[i].length; j ++) {
		$("input#startTime_" + entries[i][j]).val(values[i][0]);
		$("input#endTime_" + entries[i][j]).val(values[i][1]);
	}
}
for (var i = 0; i < entries[1].length; i ++)
	$("select#type_" + entries[1][i]).val(-2);  // Meal