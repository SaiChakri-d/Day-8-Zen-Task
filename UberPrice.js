// //4. write a class to calculate uber price.


class Uber{ 
       static BaseRate = 35; //base fare in Rupees for UberGo
       static BookingFee = 10; //booking fare in Rupees for UberGo
       static RatePerMinute = 1; //rateperminute in Rupees for UberGo 
       static RatePerKM = 10; //rateperkilometre in Rupees for UberGo
       constructor(time=1,KM=1){
           this.time = time; //the will taken as input as ETA time.
           this.KM = KM; // kilometre will be taken as input as total kms.
       }

    UberGoRate(time=this.time,KM=this.KM){
        // this is fare estimation of default Uber class for Uber Go Economy
        console.log(`Total Cost of Uber Go is Rs. ${(Uber.BaseRate)+(Uber.BookingFee)+((Uber.RatePerMinute)*time)+((Uber.RatePerKM)*KM)}`);
    }

    GoSedan(time=this.time,KM=this.KM){
        // this is fare est calculation for Go Sedan economy
        console.log(`Total Cost of Go Sedan is Rs. ${(Uber.BaseRate=40)+(Uber.BookingFee)+((Uber.RatePerMinute)*time)+((Uber.RatePerKM=14)*KM)}`);
    }

    UberXL(time=this.time,KM=this.KM){
        // this is fare est calculation for UberXL economy
        console.log(`Total Cost of UberXL is Rs. ${(Uber.BaseRate=100)+(Uber.BookingFee)+((Uber.RatePerMinute=2)*time)+((Uber.RatePerKM=20)*KM)}`);
    }
}

let ride = new Uber();
ride.UberGoRate(24,12); //for a ride of 12km in ETA 24 mins
ride.GoSedan(24,12); //for a ride of 12km in 24 mins
ride.UberXL(24,12); //for a ride of 12km in 24 mins
//output
// Total Cost of Uber Go is Rs. 189
// Total Cost of Go Sedan is Rs. 242
// Total Cost of UberXL is Rs. 398
