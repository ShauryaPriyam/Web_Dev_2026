import Aboutcomp from "../components/aboutheading";
import Container from "../components/container";
import Block1 from "../components/block1";
import Block2 from "../components/Block2";
import Block3 from "../components/Block3";
import Feature from "../components/featureheading";
import FeatureContainer from "../components/featurecontainer";


const Landingpage = () => {
  return (
    <>
      
      <section className="mb-0">
        <Aboutcomp>
          <Container>
            <Block1 />
            <Block2 />
            <Block3 />
          </Container>
        </Aboutcomp>
      </section>

     
      <section className="mt-0">
        <Feature>
          <FeatureContainer>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
      Our project app makes it simple to share questions and answers in real time. 
      You can send messages instantly, get responses from peers, and build a community of knowledge. 
      Designed for clarity and speed, it keeps conversations organized and accessible. 
      Whether for study groups or open discussions, it’s your go-to space for interactive learning.
    </p>
          </FeatureContainer>
        </Feature>
      </section>
    </>
  );
};

export default Landingpage;

