import { Dispatch, SetStateAction, createContext } from 'react';
import { TokenInfo } from '../../types';

interface IUserContext {
  user?: TokenInfo
  setUser: Dispatch<SetStateAction<TokenInfo | undefined>>
}

const UserContext = createContext<IUserContext>({ setUser: () => {} });

export default UserContext;
