import "./App.css";
import { publicRouter } from "./router/Router";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app_container">
                <Routes>
                    {publicRouter.map((item, index) => {
                        const Page = item.element;
                        return item?.defaultLayout ? (
                            <Route
                                key={index + "Router"}
                                element={
                                    <item.defaultLayout>
                                        <Page />
                                    </item.defaultLayout>
                                }
                                path={item.path}
                            />
                        ) : (
                            <Route path="/" element={<Page />} />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
