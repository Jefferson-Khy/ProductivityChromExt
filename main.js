// Function to remove the element
function removeContents() {
  var contents = $("#content");
  var contentsParent = contents.parent();

  // Create an iframe for the YouTube video
  var youtubeIframe = $("<iframe>", {
    width: "1250",
    height: "920",
    src: "https://www.youtube.com/embed/DK_O2f5cxEs?autoplay=1", // Replace VIDEO_ID with the actual YouTube video ID
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
  });

  // Prepend the iframe to contentsParent
  if (contentsParent.length) {
    contentsParent.prepend(youtubeIframe);
  }

  if (contents) {
    contents.remove();
  }
}

// Create an observer instance linked to a callback function
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (!mutation.addedNodes) return;
    removeContents(); // Try to remove the contents whenever new nodes are added
  });
});

// Start observing the document body for added nodes
observer.observe(document.body, { childList: true, subtree: true });

// Optional: Observer disconnect, if needed in the future
// observer.disconnect();
