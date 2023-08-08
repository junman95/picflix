import "./App.css";
import ErrorBoundary from "./services/errorBoundaries/ErrorBoundary";
import { Suspense } from "react";
import RandomImages from "./features/RandomImages/RandomImages";
import Layout from "./layout/Layout";
import { Card, Spinner } from "@chakra-ui/react";

function App() {
  return (
    <ErrorBoundary fallback={<Card>에러가 발생했습니다.</Card>}>
      <Suspense fallback={<Spinner w={"100px"}></Spinner>}>
        <Layout>
          <RandomImages />
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
