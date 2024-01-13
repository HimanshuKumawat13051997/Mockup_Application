import { UserInfo } from "./Userinfo";
import { MainInfo } from "./maininfo";
import { RightSide } from "./rightside";
import { SideNav } from "./sidenav";

function App() {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="fixed md:static inset-x-0 bottom-0 z-10">
        <SideNav />
      </div>
      <UserInfo />
      <MainInfo />

      <RightSide />
    </div>
  );
}

export default App;
