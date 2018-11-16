
var root = document.getElementById("root")

var empty = []
var full = []
for (var i = 0; i < 100; i++) full.push(i)

var cells

function view() {
	return m(".container", cells.map(function(i) {
		return m(".slice", {
			style: {backgroundPosition: (i % 10 * 11) + "% " + (Math.floor(i / 10) * 11) + "%"},
			onbeforeremove: exit
		})
	}))
}

function exit(vnode) {
	vnode.dom.classList.add("exit")
	return new Promise(function(resolve) {
		setTimeout(resolve, 1000)
	})
}

function run() {
	cells = cells === full ? empty : full

	m.render(root, [view()])

	setTimeout(run, 2000)
}

run()
		