export interface Transaction {
    transactionId: number;
    discountId?: number;
    activityId?: number;
    scoutId: number;
    feeId: number;

    transactionDate: string;
    receiptId?: string;
    amount: number;
    bookNo?: number;
}