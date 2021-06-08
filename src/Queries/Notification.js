import gql from "graphql-tag";

const GetNotification_QUERY = gql`
query Notifications {
    notifications {
      Message
      Status
      rider {
        first_name
        last_name
        profile_image {
          url
        }
      }
    }
  }
`;

export default GetNotification_QUERY;