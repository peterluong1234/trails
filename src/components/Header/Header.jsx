import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Icon, Button, Dropdown, Menu } from "semantic-ui-react";

// export default function PageHeader({ user, handleLogout}) {
//     return (
//         <Segment clearing>
//         <Header as="h2" floated="right">
//           <Link to="/">
//             <Icon name="home"></Icon>
//           </Link>
//           <Link to="/createtrail">
//               Create Trail
//           </Link>
//           <Link to="" onClick={handleLogout}>
//             Logout
//           </Link>
//         </Header>
//         <Header as="h2" floated="left">
//           <Link to={`/${user?.username}`}>
            // <Image
            //   src={
            //     user?.photoUrl
            //       ? user.photoUrl
            //       : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            //   }
            //   avatar
            // ></Image>
//           </Link>
//         </Header>
//       </Segment>
//     )
// }

export default function PageHeader({ user, handleLogout}) {
  return (
    <Menu size='small'>
      <Menu.Item>
        <Link to="/">
          <Icon name="home"></Icon>
        </Link>
      </Menu.Item>
      <Menu.Menu position='right'>
      <Dropdown item text=''>
            <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
            </Dropdown.Item>
            <Dropdown.Item>
             <Link to="/createtrail">
                 Create Trail
             </Link>
            </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Menu.Menu>
    </Menu>

  )
}