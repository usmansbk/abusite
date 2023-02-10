/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\nmutation CancelEvent($id: ID!, $date: Date) {\n  cancelEvent(id: $id, date: $date) {\n    id\n    isAllCancelled\n    cancelledDates\n  }\n}\n": types.CancelEventDocument,
    "\nmutation CreateEvent($input: EditEventInput!) {\n  createEvent(input: $input) {\n    id\n    title\n    description\n    startDate\n    startTime\n    endTime\n\t\tisAllCancelled\n    cancelledDates\n    repeat\n    isOwner\n    createdAt\n    updatedAt\n    timetable {\n      id\n      title\n    }\n    owner {\n      id\n      picture\n      fullName\n    }\n  }\n}\n": types.CreateEventDocument,
    "\nmutation CreateTimetable($input: EditTimetableInput!) {\n  createTimetable(input: $input) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      picture\n      fullName\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n": types.CreateTimetableDocument,
    "\nmutation DeleteEvent($deleteEventId: ID!) {\n  deleteEvent(id: $deleteEventId) {\n    id\n  }\n}\n": types.DeleteEventDocument,
    "\nmutation DeleteTimetable($deleteTimetableId: ID!) {\n  deleteTimetable(id: $deleteTimetableId) {\n    id\n  }\n}\n": types.DeleteTimetableDocument,
    "\nquery GetEventById($getEventByIdId: ID!) {\n  getEventById(id: $getEventByIdId) {\n\t\tid\n\t\ttitle\n\t\tdescription\n\t\tstartDate\n\t\tstartTime\n\t\tendTime\n\t\tcreatedAt\n\t\tupdatedAt\n\t\tisOwner\n\t\trepeat\n\t\tisAllCancelled\n\t\tcancelledDates\n\t\towner {\n\t\t\tid\n\t\t\tpicture\n\t\t\tfullName\n\t\t}\n\t\ttimetable {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n  }\n}\n": types.GetEventByIdDocument,
    "\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfullName\n\t\t\temail\n\t\t\temailVerified\n\t\t\tisMe\n\t\t\tlanguage\n\t\t\tpicture\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tunlistedEvents {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tstartDate\n\t\t\t\tstartTime\n\t\t\t\tendTime\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tisOwner\n\t\t\t\trepeat\n\t\t\t\tisAllCancelled\n\t\t\t\tcancelledDates\n\t\t\t\towner {\n\t\t\t\t\tid\n\t\t\t\t\tpicture\n\t\t\t\t\tfullName\n\t\t\t\t}\n\t\t\t\ttimetable {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t\ttimetables {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tisOwner\n    \t\tisSaved\n\t\t\t\towner {\n\t\t\t\t\tid\n\t\t\t\t\tpicture\n\t\t\t\t\tfullName\n\t\t\t\t}\n\t\t\t\tevents {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t\tstartDate\n\t\t\t\t\tstartTime\n\t\t\t\t\tendTime\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tisOwner\n\t\t\t\t\trepeat\n\t\t\t\t\tisAllCancelled\n\t\t\t\t\tcancelledDates\n\t\t\t\t\towner {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpicture\n\t\t\t\t\t\tfullName\n\t\t\t\t\t}\n\t\t\t\t\ttimetable {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.MeDocument,
    "\n\tquery GetTimetableById($getTimetableByIdId: ID!) {\n  getTimetableById(id: $getTimetableByIdId) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      fullName\n      picture\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n": types.GetTimetableByIdDocument,
    "\nmutation LoginWithSocialProvider($input: SocialLoginInput!) {\n  loginWithSocialProvider(input: $input) {\n    token\n  }\n}": types.LoginWithSocialProviderDocument,
    "\nmutation SaveTimetable($id: ID!) {\n  saveTimetable(id: $id) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      picture\n      fullName\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n": types.SaveTimetableDocument,
    "\nmutation UnsaveTimetable($id: ID!) {\n  unsaveTimetable(id: $id) {\n    id\n    isSaved\n  }\n}\n": types.UnsaveTimetableDocument,
    "\nmutation UpdateEvent($input: EditEventInput!) {\n  updateEvent(input: $input) {\n    id\n    title\n    description\n    updatedAt\n    startDate\n    startTime\n    endTime\n    repeat\n  }\n}\n": types.UpdateEventDocument,
    "\nmutation UpdateProfile($input: UpdateUserProfileInput!) {\n  updateProfile(input: $input) {\n    id\n    fullName\n    firstName\n    lastName\n    updatedAt\n  }\n}\n": types.UpdateProfileDocument,
    "\nmutation UpdateTimetable($input: EditTimetableInput!) {\n  updateTimetable(input: $input) {\n    id\n    title\n    updatedAt\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      updatedAt\n      createdAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        fullName\n        picture\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n": types.UpdateTimetableDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CancelEvent($id: ID!, $date: Date) {\n  cancelEvent(id: $id, date: $date) {\n    id\n    isAllCancelled\n    cancelledDates\n  }\n}\n"): (typeof documents)["\nmutation CancelEvent($id: ID!, $date: Date) {\n  cancelEvent(id: $id, date: $date) {\n    id\n    isAllCancelled\n    cancelledDates\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateEvent($input: EditEventInput!) {\n  createEvent(input: $input) {\n    id\n    title\n    description\n    startDate\n    startTime\n    endTime\n\t\tisAllCancelled\n    cancelledDates\n    repeat\n    isOwner\n    createdAt\n    updatedAt\n    timetable {\n      id\n      title\n    }\n    owner {\n      id\n      picture\n      fullName\n    }\n  }\n}\n"): (typeof documents)["\nmutation CreateEvent($input: EditEventInput!) {\n  createEvent(input: $input) {\n    id\n    title\n    description\n    startDate\n    startTime\n    endTime\n\t\tisAllCancelled\n    cancelledDates\n    repeat\n    isOwner\n    createdAt\n    updatedAt\n    timetable {\n      id\n      title\n    }\n    owner {\n      id\n      picture\n      fullName\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateTimetable($input: EditTimetableInput!) {\n  createTimetable(input: $input) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      picture\n      fullName\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"): (typeof documents)["\nmutation CreateTimetable($input: EditTimetableInput!) {\n  createTimetable(input: $input) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      picture\n      fullName\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteEvent($deleteEventId: ID!) {\n  deleteEvent(id: $deleteEventId) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation DeleteEvent($deleteEventId: ID!) {\n  deleteEvent(id: $deleteEventId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteTimetable($deleteTimetableId: ID!) {\n  deleteTimetable(id: $deleteTimetableId) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation DeleteTimetable($deleteTimetableId: ID!) {\n  deleteTimetable(id: $deleteTimetableId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetEventById($getEventByIdId: ID!) {\n  getEventById(id: $getEventByIdId) {\n\t\tid\n\t\ttitle\n\t\tdescription\n\t\tstartDate\n\t\tstartTime\n\t\tendTime\n\t\tcreatedAt\n\t\tupdatedAt\n\t\tisOwner\n\t\trepeat\n\t\tisAllCancelled\n\t\tcancelledDates\n\t\towner {\n\t\t\tid\n\t\t\tpicture\n\t\t\tfullName\n\t\t}\n\t\ttimetable {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n  }\n}\n"): (typeof documents)["\nquery GetEventById($getEventByIdId: ID!) {\n  getEventById(id: $getEventByIdId) {\n\t\tid\n\t\ttitle\n\t\tdescription\n\t\tstartDate\n\t\tstartTime\n\t\tendTime\n\t\tcreatedAt\n\t\tupdatedAt\n\t\tisOwner\n\t\trepeat\n\t\tisAllCancelled\n\t\tcancelledDates\n\t\towner {\n\t\t\tid\n\t\t\tpicture\n\t\t\tfullName\n\t\t}\n\t\ttimetable {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfullName\n\t\t\temail\n\t\t\temailVerified\n\t\t\tisMe\n\t\t\tlanguage\n\t\t\tpicture\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tunlistedEvents {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tstartDate\n\t\t\t\tstartTime\n\t\t\t\tendTime\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tisOwner\n\t\t\t\trepeat\n\t\t\t\tisAllCancelled\n\t\t\t\tcancelledDates\n\t\t\t\towner {\n\t\t\t\t\tid\n\t\t\t\t\tpicture\n\t\t\t\t\tfullName\n\t\t\t\t}\n\t\t\t\ttimetable {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t\ttimetables {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tisOwner\n    \t\tisSaved\n\t\t\t\towner {\n\t\t\t\t\tid\n\t\t\t\t\tpicture\n\t\t\t\t\tfullName\n\t\t\t\t}\n\t\t\t\tevents {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t\tstartDate\n\t\t\t\t\tstartTime\n\t\t\t\t\tendTime\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tisOwner\n\t\t\t\t\trepeat\n\t\t\t\t\tisAllCancelled\n\t\t\t\t\tcancelledDates\n\t\t\t\t\towner {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpicture\n\t\t\t\t\t\tfullName\n\t\t\t\t\t}\n\t\t\t\t\ttimetable {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfullName\n\t\t\temail\n\t\t\temailVerified\n\t\t\tisMe\n\t\t\tlanguage\n\t\t\tpicture\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tunlistedEvents {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tstartDate\n\t\t\t\tstartTime\n\t\t\t\tendTime\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tisOwner\n\t\t\t\trepeat\n\t\t\t\tisAllCancelled\n\t\t\t\tcancelledDates\n\t\t\t\towner {\n\t\t\t\t\tid\n\t\t\t\t\tpicture\n\t\t\t\t\tfullName\n\t\t\t\t}\n\t\t\t\ttimetable {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t\ttimetables {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tisOwner\n    \t\tisSaved\n\t\t\t\towner {\n\t\t\t\t\tid\n\t\t\t\t\tpicture\n\t\t\t\t\tfullName\n\t\t\t\t}\n\t\t\t\tevents {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t\tstartDate\n\t\t\t\t\tstartTime\n\t\t\t\t\tendTime\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tisOwner\n\t\t\t\t\trepeat\n\t\t\t\t\tisAllCancelled\n\t\t\t\t\tcancelledDates\n\t\t\t\t\towner {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpicture\n\t\t\t\t\t\tfullName\n\t\t\t\t\t}\n\t\t\t\t\ttimetable {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetTimetableById($getTimetableByIdId: ID!) {\n  getTimetableById(id: $getTimetableByIdId) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      fullName\n      picture\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"): (typeof documents)["\n\tquery GetTimetableById($getTimetableByIdId: ID!) {\n  getTimetableById(id: $getTimetableByIdId) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      fullName\n      picture\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation LoginWithSocialProvider($input: SocialLoginInput!) {\n  loginWithSocialProvider(input: $input) {\n    token\n  }\n}"): (typeof documents)["\nmutation LoginWithSocialProvider($input: SocialLoginInput!) {\n  loginWithSocialProvider(input: $input) {\n    token\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation SaveTimetable($id: ID!) {\n  saveTimetable(id: $id) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      picture\n      fullName\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"): (typeof documents)["\nmutation SaveTimetable($id: ID!) {\n  saveTimetable(id: $id) {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    isOwner\n    isSaved\n    owner {\n      id\n      picture\n      fullName\n    }\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      createdAt\n      updatedAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        picture\n        fullName\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UnsaveTimetable($id: ID!) {\n  unsaveTimetable(id: $id) {\n    id\n    isSaved\n  }\n}\n"): (typeof documents)["\nmutation UnsaveTimetable($id: ID!) {\n  unsaveTimetable(id: $id) {\n    id\n    isSaved\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateEvent($input: EditEventInput!) {\n  updateEvent(input: $input) {\n    id\n    title\n    description\n    updatedAt\n    startDate\n    startTime\n    endTime\n    repeat\n  }\n}\n"): (typeof documents)["\nmutation UpdateEvent($input: EditEventInput!) {\n  updateEvent(input: $input) {\n    id\n    title\n    description\n    updatedAt\n    startDate\n    startTime\n    endTime\n    repeat\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateProfile($input: UpdateUserProfileInput!) {\n  updateProfile(input: $input) {\n    id\n    fullName\n    firstName\n    lastName\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation UpdateProfile($input: UpdateUserProfileInput!) {\n  updateProfile(input: $input) {\n    id\n    fullName\n    firstName\n    lastName\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateTimetable($input: EditTimetableInput!) {\n  updateTimetable(input: $input) {\n    id\n    title\n    updatedAt\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      updatedAt\n      createdAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        fullName\n        picture\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"): (typeof documents)["\nmutation UpdateTimetable($input: EditTimetableInput!) {\n  updateTimetable(input: $input) {\n    id\n    title\n    updatedAt\n    events {\n      id\n      title\n      description\n      startDate\n      startTime\n      endTime\n      updatedAt\n      createdAt\n      isOwner\n      repeat\n\t\t\tisAllCancelled\n      cancelledDates\n      owner {\n        id\n        fullName\n        picture\n      }\n      timetable {\n        id\n        title\n      }\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;