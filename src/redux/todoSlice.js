import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {Constants} from '../components/Constants';
import {lsClient} from '../components/lsClient';


export const getTodoAsync = createAsyncThunk('todos/getTodoAsync',async()=>{ 
    const constant = Constants();   
    return constant;
});
export const getLsClientAsync = createAsyncThunk('todos/getLsClientAsync',async(SERVER,ADAPTER)=>{
    console.log('stock SERVER,ADAPTER: ',SERVER,ADAPTER);
    const client = lsClient(SERVER,ADAPTER)    
    return client;
});


const todoSlice = createSlice({
    name:'todos',
    initialState:{
        ADAPTER:"",
        SERVER:"",
        HOSE_Stocks:[],
        FIELD_DEF:[],
        lsClient:[],
        LIST_STOCK:[],
        isOrderBy:false,
        isLoading:false,
    },
    reducers:{
        getClientConnect:(state,action)=>{
            state.lsClient = lsClient(state.SERVER,state.ADAPTER)
        },
        UpdateListStock:(state,action)=>{          
            const index = state.LIST_STOCK.findIndex((item)=>item.CODE===action.payload.CODE);
            if(index>=0){
                //update
                state.LIST_STOCK[index].AVERAGE_PRICE = action.payload.CODE;
                state.LIST_STOCK[index].BASE_DEVIATION= action.payload.BASE_DEVIATION;
                state.LIST_STOCK[index].BASE_PRICE_W= action.payload.BASE_PRICE_W;
                state.LIST_STOCK[index].BASIC_PRICE= action.payload.BASIC_PRICE;
                state.LIST_STOCK[index].BASIC_PRICE_W= action.payload.BASIC_PRICE_W;
                state.LIST_STOCK[index].BPRICE1= action.payload.BPRICE1;
                state.LIST_STOCK[index].BPRICE2= action.payload.BPRICE2;
                state.LIST_STOCK[index].BPRICE3= action.payload.BPRICE3;
                state.LIST_STOCK[index].BQTTY1= action.payload.BQTTY1;
                state.LIST_STOCK[index].BQTTY2= action.payload.BQTTY2;
                state.LIST_STOCK[index].BQTTY3= action.payload.BQTTY3;
                state.LIST_STOCK[index].BUY_FOREIGN_QTTY= action.payload.BUY_FOREIGN_QTTY;
                state.LIST_STOCK[index].CEILING_PRICE= action.payload.CEILING_PRICE;
                state.LIST_STOCK[index].CEILING_PRICE_W= action.payload.CEILING_PRICE_W;
                state.LIST_STOCK[index].CHANGE= action.payload.CHANGE;
                state.LIST_STOCK[index].CURRENT_ROOM= action.payload.CURRENT_ROOM;
                state.LIST_STOCK[index].EXERCISE_PRICE= action.payload.EXERCISE_PRICE;
                state.LIST_STOCK[index].EXERCISE_RATIO= action.payload.EXERCISE_RATIO;
                state.LIST_STOCK[index].FLOOR_PRICE= action.payload.FLOOR_PRICE;
                state.LIST_STOCK[index].FLOOR_PRICE_W= action.payload.FLOOR_PRICE_W;
                state.LIST_STOCK[index].HIGHEST_PRICE= action.payload.HIGHEST_PRICE;
                state.LIST_STOCK[index].ISSUER_NAME= action.payload.ISSUER_NAME;
                state.LIST_STOCK[index].LAST_TRADING_DATE= action.payload.LAST_TRADING_DATE;
                state.LIST_STOCK[index].LOWEST_PRICE= action.payload.LOWEST_PRICE;
                state.LIST_STOCK[index].MATCH_PRICE= action.payload.MATCH_PRICE;
                state.LIST_STOCK[index].MATCH_QTTY= action.payload.MATCH_QTTY;
                state.LIST_STOCK[index].POINT_CAPITAL= action.payload.POINT_CAPITAL;
                state.LIST_STOCK[index].SELL_FOREIGN_QTTY= action.payload.SELL_FOREIGN_QTTY;
                state.LIST_STOCK[index].SPRICE1= action.payload.SPRICE1;
                state.LIST_STOCK[index].SPRICE2= action.payload.SPRICE2;
                state.LIST_STOCK[index].SPRICE3= action.payload.SPRICE3;
                state.LIST_STOCK[index].SQTTY1= action.payload.SQTTY1;
                state.LIST_STOCK[index].SQTTY2= action.payload.SQTTY2;
                state.LIST_STOCK[index].SQTTY3= action.payload.SQTTY3;
                state.LIST_STOCK[index].TOTAL_TRADED_QTTY= action.payload.TOTAL_TRADED_QTTY;
                state.LIST_STOCK[index].TOTAL_TRADED_VALUE= action.payload.TOTAL_TRADED_VALUE;
            }else{
                //insert
                state.LIST_STOCK.push(action.payload);
                console.log(state.LIST_STOCK);
            }
        },
        SortbyName:(state,action)=>{
            const keyValue = action.payload;
            if(state.isOrderBy){
                state.LIST_STOCK.sort((a,b)=>(a[keyValue] >b[keyValue])?1:-1)
                state.isOrderBy = !state.isOrderBy;
            }else{
                state.LIST_STOCK.sort((a,b)=>(b[keyValue] >a[keyValue])?1:-1)
                state.isOrderBy = !state.isOrderBy;
            }
            
        },
    },
    extraReducers:{
        [getTodoAsync.pending]:(state,action)=>{
            state.isLoading = true;
            console.log('Du lieu dang pending .....')            
        },
        [getTodoAsync.fulfilled]:(state,action)=>{ 
            state.ADAPTER = action.payload.ADAPTER;
            state.SERVER = action.payload.SERVER;
            state.HOSE_Stocks = action.payload.HOSE_Stocks;
            state.FIELD_DEF = action.payload.FIELD_DEF;
            
            action.payload.HOSE_Stocks.forEach(element => {
                state.LIST_STOCK.push({"CODE":element});
            });
        },
        [getLsClientAsync.fulfilled]:(state,action)=>{ 
            state.ADAPTER = action.payload;

            state.isLoading = false;
        },
    }    
});
export const {getClientConnect,UpdateListStock,SortbyName} =todoSlice.actions;
export default todoSlice.reducer;