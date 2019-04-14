ids = open("database.txt", "r").read()
idList = []
start_index = 0;

for i in range(0, len(ids)):
    if(ids[i] == '\n'):
        idList.append(ids[start_index:i-1])
        start_index = i+1

print(idList)
