/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Yakroom
 * The supercharged yakroom APIs
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  ChangeProviderStatusDto,
  CreateProviderDto,
  CreateUserDto,
  LoginAuthDto,
  SearchProvidersDto,
  UpdateProviderDto,
  UpdateUserDto,
  VerifyOtpDto
} from './generated.schemas'
import { customInstance } from './axiosInstance';



export const usersControllerGetUserInfo = (
    
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/users/user-info`, method: 'GET', signal
    },
      );
    }
  

export const getUsersControllerGetUserInfoQueryKey = () => {
    return [`/users/user-info`] as const;
    }

    
export const getUsersControllerGetUserInfoQueryOptions = <TData = Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUsersControllerGetUserInfoQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof usersControllerGetUserInfo>>> = ({ signal }) => usersControllerGetUserInfo(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type UsersControllerGetUserInfoQueryResult = NonNullable<Awaited<ReturnType<typeof usersControllerGetUserInfo>>>
export type UsersControllerGetUserInfoQueryError = unknown


export function useUsersControllerGetUserInfo<TData = Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerGetUserInfo>>,
          TError,
          Awaited<ReturnType<typeof usersControllerGetUserInfo>>
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useUsersControllerGetUserInfo<TData = Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerGetUserInfo>>,
          TError,
          Awaited<ReturnType<typeof usersControllerGetUserInfo>>
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useUsersControllerGetUserInfo<TData = Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useUsersControllerGetUserInfo<TData = Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUserInfo>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getUsersControllerGetUserInfoQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const usersControllerUpdateUserInfo = (
    updateUserDto: UpdateUserDto,
 ) => {
      
      
      return customInstance<void>(
      {url: `/users/update-profile`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateUserDto
    },
      );
    }
  


export const getUsersControllerUpdateUserInfoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerUpdateUserInfo>>, TError,{data: UpdateUserDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof usersControllerUpdateUserInfo>>, TError,{data: UpdateUserDto}, TContext> => {
    
const mutationKey = ['usersControllerUpdateUserInfo'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof usersControllerUpdateUserInfo>>, {data: UpdateUserDto}> = (props) => {
          const {data} = props ?? {};

          return  usersControllerUpdateUserInfo(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UsersControllerUpdateUserInfoMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerUpdateUserInfo>>>
    export type UsersControllerUpdateUserInfoMutationBody = UpdateUserDto
    export type UsersControllerUpdateUserInfoMutationError = unknown

    export const useUsersControllerUpdateUserInfo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerUpdateUserInfo>>, TError,{data: UpdateUserDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof usersControllerUpdateUserInfo>>,
        TError,
        {data: UpdateUserDto},
        TContext
      > => {

      const mutationOptions = getUsersControllerUpdateUserInfoMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const authControllerSignIn = (
    loginAuthDto: LoginAuthDto,
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/auth/login`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: loginAuthDto, signal
    },
      );
    }
  


export const getAuthControllerSignInMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignIn>>, TError,{data: LoginAuthDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof authControllerSignIn>>, TError,{data: LoginAuthDto}, TContext> => {
    
const mutationKey = ['authControllerSignIn'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerSignIn>>, {data: LoginAuthDto}> = (props) => {
          const {data} = props ?? {};

          return  authControllerSignIn(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerSignInMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerSignIn>>>
    export type AuthControllerSignInMutationBody = LoginAuthDto
    export type AuthControllerSignInMutationError = unknown

    export const useAuthControllerSignIn = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignIn>>, TError,{data: LoginAuthDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerSignIn>>,
        TError,
        {data: LoginAuthDto},
        TContext
      > => {

      const mutationOptions = getAuthControllerSignInMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const authControllerSignUp = (
    createUserDto: CreateUserDto,
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/auth/sign-up`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserDto, signal
    },
      );
    }
  


export const getAuthControllerSignUpMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignUp>>, TError,{data: CreateUserDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof authControllerSignUp>>, TError,{data: CreateUserDto}, TContext> => {
    
const mutationKey = ['authControllerSignUp'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerSignUp>>, {data: CreateUserDto}> = (props) => {
          const {data} = props ?? {};

          return  authControllerSignUp(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerSignUpMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerSignUp>>>
    export type AuthControllerSignUpMutationBody = CreateUserDto
    export type AuthControllerSignUpMutationError = unknown

    export const useAuthControllerSignUp = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignUp>>, TError,{data: CreateUserDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerSignUp>>,
        TError,
        {data: CreateUserDto},
        TContext
      > => {

      const mutationOptions = getAuthControllerSignUpMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const authControllerVerifyOtp = (
    verifyOtpDto: VerifyOtpDto,
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/auth/verify-otp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: verifyOtpDto, signal
    },
      );
    }
  


export const getAuthControllerVerifyOtpMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerVerifyOtp>>, TError,{data: VerifyOtpDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof authControllerVerifyOtp>>, TError,{data: VerifyOtpDto}, TContext> => {
    
const mutationKey = ['authControllerVerifyOtp'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerVerifyOtp>>, {data: VerifyOtpDto}> = (props) => {
          const {data} = props ?? {};

          return  authControllerVerifyOtp(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerVerifyOtpMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerVerifyOtp>>>
    export type AuthControllerVerifyOtpMutationBody = VerifyOtpDto
    export type AuthControllerVerifyOtpMutationError = unknown

    export const useAuthControllerVerifyOtp = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerVerifyOtp>>, TError,{data: VerifyOtpDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerVerifyOtp>>,
        TError,
        {data: VerifyOtpDto},
        TContext
      > => {

      const mutationOptions = getAuthControllerVerifyOtpMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const providersControllerCreateProvider = (
    createProviderDto: CreateProviderDto,
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/providers/create-provider-listing`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createProviderDto, signal
    },
      );
    }
  


export const getProvidersControllerCreateProviderMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerCreateProvider>>, TError,{data: CreateProviderDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof providersControllerCreateProvider>>, TError,{data: CreateProviderDto}, TContext> => {
    
const mutationKey = ['providersControllerCreateProvider'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof providersControllerCreateProvider>>, {data: CreateProviderDto}> = (props) => {
          const {data} = props ?? {};

          return  providersControllerCreateProvider(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProvidersControllerCreateProviderMutationResult = NonNullable<Awaited<ReturnType<typeof providersControllerCreateProvider>>>
    export type ProvidersControllerCreateProviderMutationBody = CreateProviderDto
    export type ProvidersControllerCreateProviderMutationError = unknown

    export const useProvidersControllerCreateProvider = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerCreateProvider>>, TError,{data: CreateProviderDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof providersControllerCreateProvider>>,
        TError,
        {data: CreateProviderDto},
        TContext
      > => {

      const mutationOptions = getProvidersControllerCreateProviderMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const providersControllerGetMyProviderDetails = (
    
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/providers/provider-info`, method: 'GET', signal
    },
      );
    }
  

export const getProvidersControllerGetMyProviderDetailsQueryKey = () => {
    return [`/providers/provider-info`] as const;
    }

    
export const getProvidersControllerGetMyProviderDetailsQueryOptions = <TData = Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getProvidersControllerGetMyProviderDetailsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>> = ({ signal }) => providersControllerGetMyProviderDetails(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ProvidersControllerGetMyProviderDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>>
export type ProvidersControllerGetMyProviderDetailsQueryError = unknown


export function useProvidersControllerGetMyProviderDetails<TData = Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>,
          TError,
          Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProvidersControllerGetMyProviderDetails<TData = Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>,
          TError,
          Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProvidersControllerGetMyProviderDetails<TData = Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useProvidersControllerGetMyProviderDetails<TData = Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetMyProviderDetails>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getProvidersControllerGetMyProviderDetailsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const providersControllerUpdateMyDetails = (
    updateProviderDto: UpdateProviderDto,
 ) => {
      
      
      return customInstance<void>(
      {url: `/providers/update-provider-details`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateProviderDto
    },
      );
    }
  


export const getProvidersControllerUpdateMyDetailsMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerUpdateMyDetails>>, TError,{data: UpdateProviderDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof providersControllerUpdateMyDetails>>, TError,{data: UpdateProviderDto}, TContext> => {
    
const mutationKey = ['providersControllerUpdateMyDetails'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof providersControllerUpdateMyDetails>>, {data: UpdateProviderDto}> = (props) => {
          const {data} = props ?? {};

          return  providersControllerUpdateMyDetails(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProvidersControllerUpdateMyDetailsMutationResult = NonNullable<Awaited<ReturnType<typeof providersControllerUpdateMyDetails>>>
    export type ProvidersControllerUpdateMyDetailsMutationBody = UpdateProviderDto
    export type ProvidersControllerUpdateMyDetailsMutationError = unknown

    export const useProvidersControllerUpdateMyDetails = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerUpdateMyDetails>>, TError,{data: UpdateProviderDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof providersControllerUpdateMyDetails>>,
        TError,
        {data: UpdateProviderDto},
        TContext
      > => {

      const mutationOptions = getProvidersControllerUpdateMyDetailsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const providersControllerArchiveMyAccount = (
    providersControllerArchiveMyAccountBody: string,
 ) => {
      
      
      return customInstance<void>(
      {url: `/providers/change-provider-status`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: providersControllerArchiveMyAccountBody
    },
      );
    }
  


export const getProvidersControllerArchiveMyAccountMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerArchiveMyAccount>>, TError,{data: string}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof providersControllerArchiveMyAccount>>, TError,{data: string}, TContext> => {
    
const mutationKey = ['providersControllerArchiveMyAccount'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof providersControllerArchiveMyAccount>>, {data: string}> = (props) => {
          const {data} = props ?? {};

          return  providersControllerArchiveMyAccount(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProvidersControllerArchiveMyAccountMutationResult = NonNullable<Awaited<ReturnType<typeof providersControllerArchiveMyAccount>>>
    export type ProvidersControllerArchiveMyAccountMutationBody = string
    export type ProvidersControllerArchiveMyAccountMutationError = unknown

    export const useProvidersControllerArchiveMyAccount = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerArchiveMyAccount>>, TError,{data: string}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof providersControllerArchiveMyAccount>>,
        TError,
        {data: string},
        TContext
      > => {

      const mutationOptions = getProvidersControllerArchiveMyAccountMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const providersControllerSearchProviders = (
    searchProvidersDto: SearchProvidersDto,
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/providers/get-providers`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: searchProvidersDto, signal
    },
      );
    }
  


export const getProvidersControllerSearchProvidersMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerSearchProviders>>, TError,{data: SearchProvidersDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof providersControllerSearchProviders>>, TError,{data: SearchProvidersDto}, TContext> => {
    
const mutationKey = ['providersControllerSearchProviders'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof providersControllerSearchProviders>>, {data: SearchProvidersDto}> = (props) => {
          const {data} = props ?? {};

          return  providersControllerSearchProviders(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProvidersControllerSearchProvidersMutationResult = NonNullable<Awaited<ReturnType<typeof providersControllerSearchProviders>>>
    export type ProvidersControllerSearchProvidersMutationBody = SearchProvidersDto
    export type ProvidersControllerSearchProvidersMutationError = unknown

    export const useProvidersControllerSearchProviders = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerSearchProviders>>, TError,{data: SearchProvidersDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof providersControllerSearchProviders>>,
        TError,
        {data: SearchProvidersDto},
        TContext
      > => {

      const mutationOptions = getProvidersControllerSearchProvidersMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const providersControllerGetAllProviders = (
    
 signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/providers/all-providers`, method: 'GET', signal
    },
      );
    }
  

export const getProvidersControllerGetAllProvidersQueryKey = () => {
    return [`/providers/all-providers`] as const;
    }

    
export const getProvidersControllerGetAllProvidersQueryOptions = <TData = Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getProvidersControllerGetAllProvidersQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof providersControllerGetAllProviders>>> = ({ signal }) => providersControllerGetAllProviders(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ProvidersControllerGetAllProvidersQueryResult = NonNullable<Awaited<ReturnType<typeof providersControllerGetAllProviders>>>
export type ProvidersControllerGetAllProvidersQueryError = unknown


export function useProvidersControllerGetAllProviders<TData = Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof providersControllerGetAllProviders>>,
          TError,
          Awaited<ReturnType<typeof providersControllerGetAllProviders>>
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProvidersControllerGetAllProviders<TData = Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof providersControllerGetAllProviders>>,
          TError,
          Awaited<ReturnType<typeof providersControllerGetAllProviders>>
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProvidersControllerGetAllProviders<TData = Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useProvidersControllerGetAllProviders<TData = Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof providersControllerGetAllProviders>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getProvidersControllerGetAllProvidersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const providersControllerArchiveProvider = (
    changeProviderStatusDto: ChangeProviderStatusDto,
 ) => {
      
      
      return customInstance<void>(
      {url: `/providers/change-listing-status`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: changeProviderStatusDto
    },
      );
    }
  


export const getProvidersControllerArchiveProviderMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerArchiveProvider>>, TError,{data: ChangeProviderStatusDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof providersControllerArchiveProvider>>, TError,{data: ChangeProviderStatusDto}, TContext> => {
    
const mutationKey = ['providersControllerArchiveProvider'];
const {mutation: mutationOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof providersControllerArchiveProvider>>, {data: ChangeProviderStatusDto}> = (props) => {
          const {data} = props ?? {};

          return  providersControllerArchiveProvider(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProvidersControllerArchiveProviderMutationResult = NonNullable<Awaited<ReturnType<typeof providersControllerArchiveProvider>>>
    export type ProvidersControllerArchiveProviderMutationBody = ChangeProviderStatusDto
    export type ProvidersControllerArchiveProviderMutationError = unknown

    export const useProvidersControllerArchiveProvider = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof providersControllerArchiveProvider>>, TError,{data: ChangeProviderStatusDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof providersControllerArchiveProvider>>,
        TError,
        {data: ChangeProviderStatusDto},
        TContext
      > => {

      const mutationOptions = getProvidersControllerArchiveProviderMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
