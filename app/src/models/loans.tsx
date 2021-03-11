export interface ILoan {
	id: string;
	description: string;
	number: string;
	paidFees: number;
	overdueFees: number;
	expiredFees: number;
	totalFees: number;
	totalAmount: string;
	currency: string;
	expirationDate: string;
	originalAmount: string;
	currentRate: string;
	payOffBalance: string;
	interestAmount: string;
	currentPayment: string;
}

export const loans: ILoan[] = [
	{
		id: '1',
		currency: 'USD',
		currentPayment: '12/9',
		currentRate: '52.20%',
		description: 'Personal loan',
		expirationDate: '19/12/2020',
		expiredFees: 3,
		interestAmount: '950.20',
		number: 'XXXX-645',
		originalAmount: '8,900.70',
		overdueFees: 3,
		paidFees: 3,
		payOffBalance: '9,500.50',
		totalAmount: '56.600',
		totalFees: 9,
	},
	{
		id: '2',
		currency: 'USD',
		currentPayment: '12/9',
		currentRate: '52.20%',
		description: 'Personal loan',
		expirationDate: '19/12/2020',
		expiredFees: 3,
		interestAmount: '950.20',
		number: 'XXXX-645',
		originalAmount: '8,900.70',
		overdueFees: 3,
		paidFees: 3,
		payOffBalance: '9,500.50',
		totalAmount: '56.600',
		totalFees: 9,
	},
	{
		id: '3',
		currency: 'USD',
		currentPayment: '12/9',
		currentRate: '52.20%',
		description: 'Personal loan',
		expirationDate: '19/12/2020',
		expiredFees: 3,
		interestAmount: '950.20',
		number: 'XXXX-645',
		originalAmount: '8,900.70',
		overdueFees: 3,
		paidFees: 3,
		payOffBalance: '9,500.50',
		totalAmount: '56.600',
		totalFees: 9,
	},
];
