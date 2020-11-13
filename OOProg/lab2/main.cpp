#include <string>
#include "Date.h"

using namespace std;

int main() {

    Date date1, date2(1995), date3(1995, Date::mar), date4(1995, Date::dec, 31);

    //date1 = date2 + date3;    // не должно работать!

    Date tdate1, tdate2;

    tdate1 += 2;

    tdate2++;
    tdate2++;

    date4 += 367;
    cout << date4 << endl;
    date4 -= 365;
    cout << date4 << endl;

    if (tdate1 != tdate2) cout << "Something wrong\n";

    else cout << "As expected\n";

    cout << date1 << endl << date2 << endl << date3 << endl << date4 << endl;

    Date today = Date(2018, Date::sep, 10);

    Date tomorrow = today + 1;

    //Date never = 43 + today;  //Не должно работать!

    return 0;

}
