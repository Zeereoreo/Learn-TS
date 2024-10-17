/**
 * Pick Type
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>): Post {
    //모든 프로퍼티를 입력하는 것이 아닌 입력하고 싶은 키 값만 넣어서 조절할 수 있다.
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '1',
    content: '2',
});