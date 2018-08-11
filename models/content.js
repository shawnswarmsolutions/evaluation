// In-memory store
const content = [
  {
    title: "First!",
    author: "Shawn"
  },
  {
    title: "Swarm Solutions",
    author: "Reid"
  },
  {
    title: "We're hiring",
    author: "Reid"
  }
]

module.exports = {
  getAll: function() {
    return content
  }
}