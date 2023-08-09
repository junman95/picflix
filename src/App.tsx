import "./App.css";
import ErrorBoundary from "./services/errorBoundaries/ErrorBoundary";
import { Suspense } from "react";
import RandomImages from "./features/RandomImages/RandomImages";
import Layout from "./layout/Layout";
import { Card, Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary fallback={<Card>에러가 발생했습니다.</Card>}>
      <Suspense fallback={<Spinner w={"100px"}></Spinner>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/myflix"
            element={
              <Layout>
                <RandomImages />
              </Layout>
            }
          />
          <Route path="/hi" element={<div>hi</div>} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
