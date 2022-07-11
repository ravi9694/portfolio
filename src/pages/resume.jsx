import Resume from "../components/resume/resume";
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
        <Resume />
      </motion.div>
    </>
  );
}

export default Home;
