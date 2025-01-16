const searchInput = document.querySelector("#searchInput");
const searchResult = document.querySelector(".searchResult");
const searchCountNumber = document.querySelector(".searchCountNumber");
const searchCloseSvg = document.querySelector(".searchCloseSvg");

const posts = [
  {
    slug: "react-19-is-coming",
    title: "React 19 is Coming!",
  },
  {
    slug: "next-js-14-auth-with-iron-session",
    title: "Next.js 14 Auth with Iron Session and Server Actions",
  },
  {
    slug: "css-tips-and-tricks",
    title: "5 CSS Tips and Tricks Every Web Developer Should Know",
  },
  {
    slug: "zustand-state-management-tool",
    title: "Zustand: Easiest Way for React State Management",
  },
  {
    slug: "role-based-auth-prisma-next-auth",
    title: "Building Role-Based Authentication with Next.js and Prisma",
  },
  {
    slug: "server-side-rendering-vs-client-side-rendering",
    title: "Server-Side Rendering (SSR) Vs Client-Side Rendering (CSR)",
  },
  {
    slug: "js-and-operator-pitfalls",
    title: "Think Twice When Using '&&' Operator for Conditional Rendering",
  }
];

const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

searchCloseSvg.addEventListener("click", () => {
  searchInput.value = "";
  search.style.display = "none";
  searchResult.innerHTML = "";
  searchCountNumber.innerHTML = "";
});

const displayPosts = (filteredPosts) => {
  searchResult.innerHTML = filteredPosts
    .map(
      (post) =>
        `
        <div class="searchItem">
        <a href=/${post.slug}>
        <h1>${post.title}</h1>
        </a>
        </div>
    `
    )
    .join("");
  searchCountNumber.innerHTML = `Found: ${filteredPosts.length}`;
};

searchInput.addEventListener(
  "input",
  debounce(() => {
    if (searchInput.value.length > 2) {
      displayPosts(
        posts.filter(
          (item) => item.title.toLowerCase().indexOf(searchInput.value) !== -1
        )
      );
    } else {
      searchResult.innerHTML = "";
      searchCountNumber.innerHTML = "";
    }
  }, 300)
);
