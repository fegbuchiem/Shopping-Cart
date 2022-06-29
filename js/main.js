var notify = document.querySelector("h1");
var select = document.querySelector(".select");
var button = document.getElementsByTagName("button");
for (var but of button) {
	but.addEventListener("click", (e) => {
		var add = Number(notify.getAttribute("data-count") || 0);
		notify.setAttribute("data-count", add + 1);
		notify.classList.add("zero");

		// animate image to cart ---//
		var image = e.target.parentNode.querySelector("img");
		var span = e.target.parentNode.querySelector("span");
		var s_image = image.cloneNode(false);
		span.appendChild(s_image);
		span.classList.add("active");
		setTimeout(() => {
			span.classList.remove("active");
			span.removeChild(s_image);
		}, 500);

		// copy and paste //
		var parent = e.target.parentNode;
		var clone = parent.cloneNode(true);
		select.appendChild(clone);
		clone.lastElementChild.innerText = "Buy-now";

		if (clone) {
			notify.onclick = () => {
				select.classList.toggle("display");
			};
		}
	});
}
