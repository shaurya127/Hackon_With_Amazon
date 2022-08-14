/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
        items {
          id
          book_id
          order_id
          order {
            id
            user
            date
            total
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          book {
            id
            title
            description
            image
            author
            featured
            price
            address
            count
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        books {
          items {
            id
            book_id
            order_id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlot = /* GraphQL */ `
  query GetSlot($id: ID!) {
    getSlot(id: $id) {
      id
      startTime
      date
      shopID
      bookedcount
      createdAt
      updatedAt
    }
  }
`;
export const listSlots = /* GraphQL */ `
  query ListSlots(
    $filter: ModelSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startTime
        date
        shopID
        bookedcount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const slotbydayandtime = /* GraphQL */ `
  query Slotbydayandtime(
    $startTime: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    slotbydayandtime(
      startTime: $startTime
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startTime
        date
        shopID
        bookedcount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bydate = /* GraphQL */ `
  query Bydate(
    $date: AWSDate
    $sortDirection: ModelSortDirection
    $filter: ModelSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bydate(
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startTime
        date
        shopID
        bookedcount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const slotbyshop = /* GraphQL */ `
  query Slotbyshop(
    $shopID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    slotbyshop(
      shopID: $shopID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startTime
        date
        shopID
        bookedcount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
      name
      location
      owner
      image
      createdAt
      updatedAt
      slots {
        items {
          id
          startTime
          date
          shopID
          bookedcount
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        owner
        image
        createdAt
        updatedAt
        slots {
          items {
            id
            startTime
            date
            shopID
            bookedcount
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const bynameandlocation = /* GraphQL */ `
  query Bynameandlocation(
    $name: String
    $location: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bynameandlocation(
      name: $name
      location: $location
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        location
        owner
        image
        createdAt
        updatedAt
        slots {
          items {
            id
            startTime
            date
            shopID
            bookedcount
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const bylocation = /* GraphQL */ `
  query Bylocation(
    $location: String
    $sortDirection: ModelSortDirection
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bylocation(
      location: $location
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        location
        owner
        image
        createdAt
        updatedAt
        slots {
          items {
            id
            startTime
            date
            shopID
            bookedcount
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        address
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      address
      count
      orders {
        items {
          id
          book_id
          order_id
          order {
            id
            user
            date
            total
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          book {
            id
            title
            description
            image
            author
            featured
            price
            address
            count
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
