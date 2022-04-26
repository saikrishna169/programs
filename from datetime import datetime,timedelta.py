from datetime import datetime,timedelta
start_dt_string=input()
end_dt_string=input()
start_dt=datetime.strptime(start_dt_string,'%b %d %Y')
end_dt=datetime.strptime(end_dt_string,'%b %d %Y')
number_of_days=(end_dt- start_dt).days
for i in range (number_of_days+1):
    print(start_dt+timedelta(days=i))