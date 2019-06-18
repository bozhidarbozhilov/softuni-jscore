function result(command){
    let up = this.upvotes;
    let down = this.downvotes;

    let commands = {
        upvote: ()=>{
            this.upvotes += 1;
        },
        downvote: ()=>{
            this.downvotes += 1;
        },
        score: ()=>{
            let balance = up-down;
            let result = obfuscate();
            result.push(balance);
            result.push(rating());
            return result;

            function obfuscate(){
                let obfuscateUpvotes = up
                let obfuscateDownvotes = down;

                if(up + down > 50){
                    let obfuscateValue = Math.ceil(Math.max(up, down)*0.25);
                    obfuscateUpvotes += obfuscateValue;
                    obfuscateDownvotes += obfuscateValue;
                }
                return [obfuscateUpvotes, obfuscateDownvotes];
            }
            function rating(){
                if(Math.abs(up + down) >= 10){
                    if(balance>=0){
                        let test = up/(up+down);
                        if((up/(up+down))*100 > 66){
                            return 'hot'
                        }else if(up + down > 100){
                            return 'controversial'
                        }
                    }else{
                        return 'unpopular'
                    }
                }
                return 'new';
            }
        }
    }

    return commands[command]();

}

var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

// Under border case
var answer = result.call(forumPost, 'score');
console.log(answer);
var expected = [4, 5, -1, 'new'];

// Past border case
result.call(forumPost, 'downvote');
answer = result.call(forumPost, 'score');
console.log(answer);
expected = [4, 6, -2, 'unpopular'];

result.call(forumPost, 'upvote');
result.call(forumPost, 'upvote');
answer = result.call(forumPost, 'score');
console.log(answer);
expected = [6, 6, 0, 'new'];

// 38 Upvotes
for (let i = 0; i < 38; i++) {
    result.call(forumPost, 'upvote');
}
answer = result.call(forumPost, 'score');
console.log(answer);
expected = [44, 6, 38, 'hot'];

// Past obfuscation threshold
result.call(forumPost, 'downvote');
answer = result.call(forumPost, 'score');
console.log(answer);
expected = [55, 18, 37, 'hot'];

// Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;

answer = result.call(forumPost, 'score');
console.log(answer);
expected = [165, 101, 64, 'controversial'];

// Past hot threshold
forumPost.upvotes = 133;

answer = result.call(forumPost, 'score');
console.log(answer);