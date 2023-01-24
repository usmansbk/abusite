/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number */
  AccountNumber: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: any;
  /** A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down */
  Cuid: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address. */
  IP: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit code to identify the financial institution. */
  RoutingNumber: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** A field whose value is a Semantic Version: https://semver.org */
  SemVer: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones */
  TimeZone: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /** Represents NULL values */
  Void: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['JWT']>;
};

export type AuthRule = {
  allow: AuthStrategy;
  identityClaim?: InputMaybe<Scalars['String']>;
};

export enum AuthStrategy {
  /**
   * To restrict a record's access to a specific user, use the `owner` strategy.
   * When `owner` authorization is configured, only the record's `owner` and admins are allowed the specified operations.
   */
  Owner = 'owner'
}

export type EditEventInput = {
  description?: InputMaybe<Scalars['NonEmptyString']>;
  endTime?: InputMaybe<Scalars['LocalTime']>;
  id?: InputMaybe<Scalars['ID']>;
  repeat?: InputMaybe<RepeatFrequency>;
  startDate: Scalars['Date'];
  startTime?: InputMaybe<Scalars['LocalTime']>;
  timetableId?: InputMaybe<Scalars['ID']>;
  title: Scalars['NonEmptyString'];
};

export type EditTimetableInput = {
  description?: InputMaybe<Scalars['NonEmptyString']>;
  events: Array<InputMaybe<EditEventInput>>;
  id?: InputMaybe<Scalars['ID']>;
  title: Scalars['NonEmptyString'];
};

export type Event = {
  __typename?: 'Event';
  cancelledDates: Array<Maybe<Scalars['Date']>>;
  code?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['LocalTime']>;
  id: Scalars['ID'];
  isOwner: Scalars['Boolean'];
  owner: User;
  repeat?: Maybe<RepeatFrequency>;
  startDate: Scalars['Date'];
  startTime?: Maybe<Scalars['LocalTime']>;
  timetable?: Maybe<Timetable>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelEvent: Event;
  createEvent: Event;
  createTimetable: Timetable;
  deleteEvent: Event;
  deleteTimetable: Timetable;
  loginWithSocialProvider: AuthPayload;
  saveTimetable: Timetable;
  unsaveTimetable: Timetable;
  updateEvent: Event;
  updateProfile: User;
  updateTimetable: Timetable;
};


export type MutationCancelEventArgs = {
  date: Scalars['Date'];
};


export type MutationCreateEventArgs = {
  input: EditEventInput;
};


export type MutationCreateTimetableArgs = {
  input: EditTimetableInput;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
  reason?: InputMaybe<Scalars['NonEmptyString']>;
};


export type MutationDeleteTimetableArgs = {
  id: Scalars['ID'];
  reason?: InputMaybe<Scalars['NonEmptyString']>;
};


export type MutationLoginWithSocialProviderArgs = {
  input: SocialLoginInput;
};


export type MutationSaveTimetableArgs = {
  id: Scalars['ID'];
};


export type MutationUnsaveTimetableArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  input: EditEventInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUpdateTimetableArgs = {
  input: EditTimetableInput;
};

export type Query = {
  __typename?: 'Query';
  getEventById: Event;
  getTimetableById: Timetable;
  me: User;
};


export type QueryGetEventByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetTimetableByIdArgs = {
  id: Scalars['ID'];
};

export enum RepeatFrequency {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type SocialLoginInput = {
  code: Scalars['String'];
  provider: SocialProvider;
};

export enum SocialProvider {
  Google = 'GOOGLE'
}

export type Timetable = {
  __typename?: 'Timetable';
  code?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  events: Array<Maybe<Event>>;
  id: Scalars['ID'];
  isOwner: Scalars['Boolean'];
  owner: User;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateUserProfileInput = {
  firstName: Scalars['NonEmptyString'];
  language?: InputMaybe<Scalars['Locale']>;
  lastName: Scalars['NonEmptyString'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  emailVerified: Scalars['Boolean'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  isMe: Scalars['Boolean'];
  language?: Maybe<Scalars['Locale']>;
  lastName: Scalars['String'];
  picture?: Maybe<Scalars['URL']>;
  timetables: Array<Maybe<Timetable>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UserPictureArgs = {
  height?: InputMaybe<Scalars['PositiveInt']>;
  width?: InputMaybe<Scalars['PositiveInt']>;
};

export type CreateEventMutationVariables = Exact<{
  input: EditEventInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, title: string, description?: string | null, startDate: any, startTime?: any | null, endTime?: any | null, cancelledDates: Array<any | null>, repeat?: RepeatFrequency | null, isOwner: boolean, createdAt: any, updatedAt?: any | null, timetable?: { __typename?: 'Timetable', id: string, title: string } | null } };

export type CreateTimetableMutationVariables = Exact<{
  input: EditTimetableInput;
}>;


export type CreateTimetableMutation = { __typename?: 'Mutation', createTimetable: { __typename?: 'Timetable', id: string, title: string, description?: string | null, code?: string | null, createdAt: any, updatedAt?: any | null, isOwner: boolean, owner: { __typename?: 'User', id: string, picture?: any | null, fullName: string }, events: Array<{ __typename?: 'Event', id: string, title: string, description?: string | null, startDate: any, startTime?: any | null, endTime?: any | null, createdAt: any, updatedAt?: any | null, isOwner: boolean, repeat?: RepeatFrequency | null, cancelledDates: Array<any | null>, owner: { __typename?: 'User', id: string, picture?: any | null, fullName: string }, timetable?: { __typename?: 'Timetable', id: string, title: string } | null } | null> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, firstName: string, lastName: string, fullName: string, email: any, emailVerified: boolean, isMe: boolean, language?: any | null, picture?: any | null, createdAt: any, updatedAt?: any | null, timetables: Array<{ __typename?: 'Timetable', id: string, title: string, description?: string | null, code?: string | null, createdAt: any, updatedAt?: any | null, isOwner: boolean, owner: { __typename?: 'User', id: string, picture?: any | null, fullName: string }, events: Array<{ __typename?: 'Event', id: string, title: string, description?: string | null, startDate: any, startTime?: any | null, endTime?: any | null, createdAt: any, updatedAt?: any | null, isOwner: boolean, repeat?: RepeatFrequency | null, cancelledDates: Array<any | null>, owner: { __typename?: 'User', id: string, picture?: any | null, fullName: string }, timetable?: { __typename?: 'Timetable', id: string, title: string } | null } | null> } | null> } };

export type GetTimetableByIdQueryVariables = Exact<{
  getTimetableByIdId: Scalars['ID'];
}>;


export type GetTimetableByIdQuery = { __typename?: 'Query', getTimetableById: { __typename?: 'Timetable', id: string, title: string, description?: string | null, createdAt: any, updatedAt?: any | null, isOwner: boolean, code?: string | null, owner: { __typename?: 'User', id: string, fullName: string, picture?: any | null }, events: Array<{ __typename?: 'Event', id: string, title: string, description?: string | null, startDate: any, startTime?: any | null, endTime?: any | null, createdAt: any, updatedAt?: any | null, isOwner: boolean, repeat?: RepeatFrequency | null, cancelledDates: Array<any | null>, owner: { __typename?: 'User', id: string, picture?: any | null, fullName: string }, timetable?: { __typename?: 'Timetable', id: string, title: string } | null } | null> } };

export type LoginWithSocialProviderMutationVariables = Exact<{
  input: SocialLoginInput;
}>;


export type LoginWithSocialProviderMutation = { __typename?: 'Mutation', loginWithSocialProvider: { __typename?: 'AuthPayload', token?: any | null } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateUserProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: string, fullName: string, firstName: string, lastName: string, updatedAt?: any | null } };

export type UpdateTimetableMutationVariables = Exact<{
  input: EditTimetableInput;
}>;


export type UpdateTimetableMutation = { __typename?: 'Mutation', updateTimetable: { __typename?: 'Timetable', id: string, title: string, updatedAt?: any | null, events: Array<{ __typename?: 'Event', id: string, title: string, description?: string | null, startDate: any, startTime?: any | null, endTime?: any | null, updatedAt?: any | null, createdAt: any, isOwner: boolean, repeat?: RepeatFrequency | null, cancelledDates: Array<any | null>, owner: { __typename?: 'User', id: string, fullName: string, picture?: any | null }, timetable?: { __typename?: 'Timetable', id: string, title: string } | null } | null> } };


export const CreateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledDates"}},{"kind":"Field","name":{"kind":"Name","value":"repeat"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"timetable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>;
export const CreateTimetableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTimetable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTimetableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTimetable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"repeat"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledDates"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timetable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateTimetableMutation, CreateTimetableMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isMe"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"timetables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"repeat"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledDates"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timetable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetTimetableByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTimetableById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getTimetableByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTimetableById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getTimetableByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"repeat"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledDates"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timetable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTimetableByIdQuery, GetTimetableByIdQueryVariables>;
export const LoginWithSocialProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginWithSocialProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginWithSocialProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginWithSocialProviderMutation, LoginWithSocialProviderMutationVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateTimetableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTimetable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditTimetableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTimetable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"repeat"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledDates"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timetable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTimetableMutation, UpdateTimetableMutationVariables>;