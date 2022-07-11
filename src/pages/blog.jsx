import Blog from "../components/blog/blog";
import {motion} from 'framer-motion';
function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Blog />
      </motion.div>
    </>
  );
}

export default Home;
