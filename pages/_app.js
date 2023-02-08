import "../styles/globals.css";
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


//INTERNAL IMPORT
import { VotingProvider } from "../context/Voter";
import NavBar from "../components/NavBar/NavBar";

const MyApp = ({ Component, pageProps }) => (
  // <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      
  <VotingProvider>
    <div>
      <NavBar />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  </VotingProvider>
    //  </ThirdwebProvider>
);

export default MyApp;