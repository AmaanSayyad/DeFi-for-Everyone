/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GreeterInterface extends ethers.utils.Interface {
  functions: {
    "getUser(address)": FunctionFragment;
    "greet()": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getUser", values: [string]): string;
  encodeFunctionData(functionFragment: "greet", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;

  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;

  events: {};
}

export class Greeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GreeterInterface;

  functions: {
    getUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralBase: BigNumber;
        totalDebtBase: BigNumber;
        availableBorrowsBase: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    greet(overrides?: CallOverrides): Promise<[string]>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getUser(
    _user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalCollateralBase: BigNumber;
      totalDebtBase: BigNumber;
      availableBorrowsBase: BigNumber;
      currentLiquidationThreshold: BigNumber;
      ltv: BigNumber;
      healthFactor: BigNumber;
    }
  >;

  greet(overrides?: CallOverrides): Promise<string>;

  setGreeting(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralBase: BigNumber;
        totalDebtBase: BigNumber;
        availableBorrowsBase: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    greet(overrides?: CallOverrides): Promise<string>;

    setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getUser(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    greet(overrides?: CallOverrides): Promise<BigNumber>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    greet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
