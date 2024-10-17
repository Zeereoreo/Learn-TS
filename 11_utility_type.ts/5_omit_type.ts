interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Omit<Post, 'createdAt'>): Post {
    // Pick과는 반대로 넣고싶지 않은 요소를 넣는다
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '1',
    content: '2',
});