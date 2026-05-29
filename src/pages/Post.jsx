import { useParams } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

// importar os dados dos posts
import posts from "../data/posts";

function Post() {
    const { id } = useParams();

    // buscar no array de posts o post que possui o id recebido
    const post = posts.find((p) => p.id === parseInt(id));

    // retornar erro senao encontrar o post
    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <>
            <Header title="Meu Blog" />
            <h1>{post.title}</h1>
            <p>{post.author} / {post.date}</p>
            <p>{post.content}</p>
            <Footer text="Todos os direitos reservados" />
        </>
    );
}

export default Post;