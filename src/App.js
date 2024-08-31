import Counter from './feature/counter/Counter';
import AddPostForm from './feature/posts/AddPostForm';
import PostsList from './feature/posts/PostsList';

function App() {
  return (
    <main>
      {/*  Counter tutorial - 03 Aug */}
      {/* <Counter /> */}
      {/*  Post tutorial - 19 Aug */}
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App;
