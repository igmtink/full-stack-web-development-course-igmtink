// !Adding elements in jQuery
// Adding (element) before the (main element)
// (before element) (h1 element)
$("h1").before("<button>Before</button>");

// Adding (element) after the (main element)
// (h1 element) (after element)
$("h1").after("<button>After</button>");

// Adding (element) before the (content) of (main element)
// This is inside of (main element)
// (prepend element (h1 element))
$("h1").prepend("<button>Prepend</button>");

// Adding (element) after the (content) of (main element)
// This is inside of (main element)
// ((h1 element) append element)
$("h1").append("<button>Append</button>");

// !Removing elements in jQuery
$("button").remove();
