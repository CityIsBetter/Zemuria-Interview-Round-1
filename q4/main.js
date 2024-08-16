const content = document.getElementById('content');
let skip = 0;
let isLoading = false;

const fetchData = async () => {
    if (isLoading) return; 

    isLoading = true;

    try {
        const response = await fetch(`https://dummyjson.com/posts?limit=20&skip=${skip}&select=title,reactions,userId`);
        const data = await response.json();

        skip += 20;
        const posts = data.posts;
        
        posts.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.innerHTML = `<h1>${item.title}</h1><p>Likes: ${item.reactions.likes} Dislikes: ${item.reactions.dislikes}</p>`;
            content.appendChild(div);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        isLoading = false;
    }
};

const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        fetchData();
    }
};

window.addEventListener('scroll', handleScroll);
fetchData();
