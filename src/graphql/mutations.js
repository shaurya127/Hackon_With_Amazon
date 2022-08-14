/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createSlot = /* GraphQL */ `
  mutation CreateSlot(
    $input: CreateSlotInput!
    $condition: ModelSlotConditionInput
  ) {
    createSlot(input: $input, condition: $condition) {
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
export const updateSlot = /* GraphQL */ `
  mutation UpdateSlot(
    $input: UpdateSlotInput!
    $condition: ModelSlotConditionInput
  ) {
    updateSlot(input: $input, condition: $condition) {
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
export const deleteSlot = /* GraphQL */ `
  mutation DeleteSlot(
    $input: DeleteSlotInput!
    $condition: ModelSlotConditionInput
  ) {
    deleteSlot(input: $input, condition: $condition) {
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
export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
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
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
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
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBookOrder = /* GraphQL */ `
  mutation CreateBookOrder(
    $input: CreateBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    createBookOrder(input: $input, condition: $condition) {
      id
      book_id
      order_id
      order {
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
        orders {
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
    }
  }
`;
export const updateBookOrder = /* GraphQL */ `
  mutation UpdateBookOrder(
    $input: UpdateBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    updateBookOrder(input: $input, condition: $condition) {
      id
      book_id
      order_id
      order {
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
        orders {
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
    }
  }
`;
export const deleteBookOrder = /* GraphQL */ `
  mutation DeleteBookOrder(
    $input: DeleteBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    deleteBookOrder(input: $input, condition: $condition) {
      id
      book_id
      order_id
      order {
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
        orders {
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
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
