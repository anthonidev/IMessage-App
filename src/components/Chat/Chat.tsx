import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

interface IChatProps {}

const Chat: React.FC<IChatProps> = (props) => {
  return (
    <div>
      <h1>Chat</h1>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default Chat;
